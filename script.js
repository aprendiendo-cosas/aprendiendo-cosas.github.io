// Get DOM elements and organization name
async function searchInOrg() {
    const searchTerm = document.getElementById('search-term').value.trim();
    const loadingDiv = document.getElementById('loading');
    const resultsDiv = document.getElementById('results');
    const expandedSearch = document.getElementById('expanded-search').checked;
    const org = 'aprendiendo-cosas';

    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }

    // Show loading and clear previous results
    loadingDiv.classList.remove('hidden');
    resultsDiv.innerHTML = '';

    try {
        // Search repositories by name/description within the organization
        const query = encodeURIComponent(`${searchTerm} org:${org}`);
        const repoRes = await fetch(`https://api.github.com/search/repositories?q=${query}`, {
            headers: {
                'Accept': 'application/vnd.github+json',
            }
        });

        if (!repoRes.ok) {
            throw new Error(`GitHub API error: ${repoRes.status}`);
        }
        const data = await repoRes.json();

        if (!data.items || data.items.length === 0) {
            loadingDiv.classList.add('hidden');
            resultsDiv.innerHTML = '<p>No repositories found</p>';
            return;
        }

        // Fetch custom property and search files in code if expanded search is enabled
        const reposWithProperties = await Promise.all(
            data.items.map(async repo => {
                // Get custom properties for kind separation
                const propRes = await fetch(
                    `https://api.github.com/repos/${org}/${repo.name}/properties/values`,
                    {
                        headers: {
                            'Accept': 'application/vnd.github+json',
                        }
                    }
                );
                let propertyData = { properties: {} };
                if (propRes.ok) {
                    propertyData = await propRes.json();
                }
                const kindProperty = Array.isArray(propertyData)
                    ? propertyData.find(p => p.property_name === 'Tipo_general')
                    : null;

                // Get related subjects for teaching-act type
                let subjects = [];
                if (kindProperty?.value === 'Acto docente') {
                    const subjectsProp = Array.isArray(propertyData)
                        ? propertyData.find(p => p.property_name === 'Asignatura')
                        : null;
                    if (subjectsProp && Array.isArray(subjectsProp.value)) {
                        subjects = await Promise.all(
                            subjectsProp.value.map(async subjectName => {
                                const subjectRes = await fetch(
                                    `https://api.github.com/repos/${org}/${subjectName}`,
                                    {
                                        headers: {
                                            'Accept': 'application/vnd.github+json',
                                        }
                                    }
                                );
                                if (subjectRes.ok) {
                                    const subjectRepo = await subjectRes.json();
                                    return { name: subjectRepo.name, html_url: subjectRepo.html_url };
                                }
                                return null;
                            })
                        );
                        subjects = subjects.filter(s => s);
                    }
                }


                // If expanded search, search matching code files in each repo
                let files = [];
                if (expandedSearch) {
                    const codeQuery = encodeURIComponent(`${searchTerm} repo:${org}/${repo.name}`);
                    const codeRes = await fetch(`https://api.github.com/search/code?q=${codeQuery}`, {
                        headers: {
                            'Accept': 'application/vnd.github+json',
                        }
                    });
                    if (codeRes.ok) {
                        const codeData = await codeRes.json();
                        if (Array.isArray(codeData.items)) {
                            files = codeData.items.filter(file => file.path.endsWith('.html'));
                        }
                    }
                }

                return {
                    ...repo,
                    kind: kindProperty?.value || null,
                    files,
                    relatedSubjects: subjects
                };
            })
        );

        // Split repos into subject and teaching-act groups
        const subjectRepos = reposWithProperties.filter(repo => repo.kind === 'Asignatura');
        const teachingActRepos = reposWithProperties.filter(repo => repo.kind === 'Acto docente');

        console.log(teachingActRepos)

        loadingDiv.classList.add('hidden');

        // Display repository cards, optionally showing matching files
        function appendRepoGroup(titleText, repoGroup) {
            if (repoGroup.length === 0) return;
            const title = document.createElement('h2');
            title.textContent = titleText;
            resultsDiv.appendChild(title);

            repoGroup.forEach(repo => {
                const repoCard = document.createElement('div');
                repoCard.className = 'repo-card';
                let html = `
                    <h3>
                        <a href="${repo.html_url}" target="_blank">
                            ${repo.name}
                        </a>
                    </h3>
                    <p>${repo.description ? repo.description : 'No description'}</p>
                `;
                // Show matched files from code search if enabled
                if (expandedSearch && repo.files && repo.files.length > 0) {
                    html += '<ul class="files-list">';
                    repo.files.forEach(file => {
                        // Genera el enlace de GitHub Pages para el HTML visualizable
                        const pagesUrl = `https://${org}.github.io/${repo.name}/${file.path}`;
                        html += `<li><a href="${pagesUrl}" target="_blank">${file.path}</a></li>`;
                    });
                    html += '</ul>';
                }

                // For teaching-act, show related subjects
                if (titleText === 'Teaching Acts' && Array.isArray(repo.relatedSubjects) && repo.relatedSubjects.length > 0) {
                    html += '<div class="related-subjects"><strong>Related Subjects:</strong> ';
                    html += repo.relatedSubjects.map(subj =>
                        `<a href="${subj.html_url}" target="_blank">${subj.name}</a>`
                    ).join(', ');
                    html += '</div>';
                }
                repoCard.innerHTML = html;
                resultsDiv.appendChild(repoCard);
            });
        }

        appendRepoGroup('Subjects', subjectRepos);
        appendRepoGroup('Teaching Acts', teachingActRepos);

        if (teachingActRepos.length === 0 && subjectRepos.length === 0) {
            resultsDiv.innerHTML = `<p>No repositories found</p>`;
        }

    } catch (error) {
        // Show error message and hide loading
        loadingDiv.classList.add('hidden');
        resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        console.error('Error:', error);
    }
}

// Enable search on Enter key press
document.getElementById('search-term').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchInOrg();
    }
});