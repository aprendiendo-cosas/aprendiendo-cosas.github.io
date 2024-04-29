## Páginas generales
- [Acerca de las Páginas de GitHub y Jekyll (también temas)](https://docs.github.com/es/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)
- [Crear un sitio de páginas de Github con Jekyll](https://docs.github.com/es/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)
- [Guía de inicio rápido para github pages](https://docs.github.com/es/pages/quickstart)
- [La guía para principiantes rápida de Git y Github](https://www.freecodecamp.org/espanol/news/guia-para-principiantes-de-git-y-github/)

## Instalación
- [Instalar Gems, Jekyll, bundle...](https://jekyllrb.com/docs/installation/windows/)

## Temas
- [Instalar Jekyll en Windows](https://jekyllrb.com/docs/installation/windows/)
- [Temas soportados (oficial)](https://pages.github.com/themes/)
- [Temas de Jekyll no oficiales](https://github.com/topics/jekyll-theme)
- [Agregar un tema a tu sitio de Páginas de GitHub con Jekyll](https://docs.github.com/es/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)
- [Minimal mistakes](https://github.com/mmistakes/minimal-mistakes)
  - [Quick start guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)
  - [Configuración](https://mmistakes.github.io/minimal-mistakes/docs/configuration/)
  - [Minimal Mistakes Cheat Sheet](https://www.fabriziomusacchio.com/blog/2021-08-11-Minimal_Mistakes_Cheat_Sheet/)
  - Quizás haya que copiar el sitio entero desde el directorio docs [de aquí](https://github.com/mmistakes/minimal-mistakes/tree/master/docs)... **haciendo una copia de seguridad de lo que llevo hecho hasta ahora**

## Dudas configuración

Compilar la página: **bundle exec jekyll serve**

### [Comentarios](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#comments)

- ¿Se van a permitir comentarios?
- ¿Qué gestor de comentarios se va a utilizar?
  - Disqus
  - Discourse
  - Facebook Comments
  - Staticman v2 / v3
  - utterances
  - giscus
  - Otro
- Añadir un enlace en la columna de la izquierda para escribir comentarios

### [Moderación de comentarios](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#comment-moderation)

¿Se van a moderar los comentarios o se van a dejar libres?

Si se moderan cada vez que alguien haga un comentario en un post llegará una petición de pull y habrá que fusionarla (merging de git) para aprobarla.

### [Captcha](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#recaptcha-support-v2-only)

Si hay comentarios ¿va a hacer falta un captcha?

Si se configura harán falta credenciales (client_id, secret_id...)

### [Buscador](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#site-search)

- Para Algolia y Google hace falta tener credenciales (client_id, secret_id...)
- ¿Qué buscador se va a utilizar para buscar en la página?
  - Lunr
  - Algolia
  - Google

### [SEO](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#seo-social-sharing-and-analytics-settings)

- ¿Se va a configurar el SEO para que aparezca en Google?
- Para todas las opciones hacen falta credenciales (cliente_id, secret_id, token...)
- Las opciones son:
  - Google
  - Bing
  - Naver
  - Yandex
  - Baidu

### [Redes sociales](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#twitter-cards-and-facebook-open-graph)

Se puede configurar para que un artículo o post se pueda citar en Twitter o Facebook con el nombre de la página.

- ¿Habrá cuenta de la página?
- Si los posts tienen imagen en su cabecera aparecerá esta en el twit, pero si no la tienen se puede configurar para que aparezca una por defecto.
- [Datos de redes sociales para que los indexe Google](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#include-your-social-profile-in-search-results)

### [Google Analytics](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#analytics)

Está desactivado por defecto, pero se puede activar cualquier opción, aunque hacen falta credenciales...

Las opciones por defecto que trae son:

- google
- google-universal
- google-gtag

### [Datos del creador (autor) de la página](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#site-author)

Se pueden configurar los datos del creador o autor de la página para que aparezcan en el apartado de información (correo, nombre, avatar, bio, localización, redes sociales...).

![](https://mmistakes.github.io/minimal-mistakes/assets/images/mm-author-sidebar-example.jpg)

No he encontrado la cuenta de Linkedin pero no sé si es importante.

### [Front Matter Defaults](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#front-matter-defaults)

Configuración general para los nuevos posts. Se puede sobreescribir en cada post individualmente.

### [Plugins](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#plugins)

### [Autores](https://mmistakes.github.io/minimal-mistakes/docs/authors/)
¿Va a haber varios autores?

### [Posts](https://mmistakes.github.io/minimal-mistakes/docs/posts/)
