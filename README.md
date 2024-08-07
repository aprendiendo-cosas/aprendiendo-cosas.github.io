# Instrucciones de _Aprendiendo cosas_

[TOC]

## Estructura del repositorio

De todos los directorios que hay en el repositorio solo hay que tener en cuenta para editar la web:

- root
- _data
- _pages
- _posts
- assets

Al resto no hay que hacerle mucho caso a no ser que se rompa todo... Son directorios y archivos que genera Jekyll para renderizar los markdown que se crean y editan a mano y generar los html que realmente son las páginas que se ven.

Voy a ir describiendo los archivos que se deben modificar en cada directorio para así también describir como funciona todo.

## root

Aquí solo hay que editar el archivo `_config.yml`, que es donde se establece la configuración global del sitio.

Todas las etiquetas del archivo están comentadas para saber para que se utilizan y en la [página de configuración de Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) se describe todo lo que se puede cambiar en `_config.yml`.

Del resto de archivos que hay en la raíz solo se deberían modificar a mano `README.md` y `NOTAS.md`.

**El resto de archivos los modifica Jekyll cuando es necesario.**

## _data

En este directorio solo hay tres archivos:

- navigation.yml
- authors.yml
- ui-text.yml

### navigation.yml

Este archivo configura los menús de navegación que aparecen en la parte superior derecha.

Se puede modificar comentando y descomentando lo que ya hay en el archivo y asegurándose de que existe el archivo al que apunta cada sección.

#### authors.yml

Aquí van los datos de la gente que va a añadir información al repositorio para que puedan aparecer en las páginas que suben.

La estructura del archivo es como esta y se pueden usar las mismas etiquetas que en la configuración del autor principal que hay en el archivo `_config.yml`.

```yaml
RaulCasado:
  name        : "Raúl Casado Barbero"
  bio         : "Hago cosas"
  avatar      : "/assets/raulNaranja.jpg"
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      url: "mailto:rcbarbero@gmail.com.com"
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      url: "https://twitter.com/raul_casbar"

corneliusFiddlebone:
  name        : "Cornelius Fiddlebone"
  bio         : "I ordered what?"
  avatar      : "/assets/bio-photo.jpg"
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      url: "mailto:cornelius@thewhip.com"
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      url: "https://twitter.com/rhymeswithsackit"
```

Para que aparezca el autor en cada página que crea cada uno se debe añadir la cabecera del post de este modo.

```yaml
---
layout: single
author: RaulCasado
categories:
  - Ecología Biología II
title:  "ESTO ES UN POST DE PRUEBA"
header:
  overlay_color: "#5e616c"
excerpt: >
---
```

### ui-text.yml

Este archivo tiene las traducciones de todos los elementos de la página.

## _pages

En este directorio se guardan los markdown que darán lugar a páginas cuando se rendericen por Jekyll.

En concreto en Aprendiendo Cosas se guardan las páginas de inicio ([home.md](/_pages/home.md)) y las que muestran los contenidos por asignatura.

### home.md

No es más que un archivo de texto con formato markdown con la información que aparecerá en la página de inicio del sitio.

La configuración de renderizado (layout, autor, imágenes de la cabecera...) está como siempre en la cabecera.

**Es importante que el valor de la etiqueta permalink sea `/`**.

### Asignaturas

Son archivos markdown con las páginas que filtran todas las versiones de las asignaturas.

Estos archivos solo tienen el encabezado que debe ser como el siguiente:

```yaml
---
title: "Ecología de Ciencias Ambientales"
layout: category
permalink: /categories/ecologia-ciencias-ambientales/
taxonomy: Ecología Ciencias Ambientales
---
```

Las etiquetas que debe tener son:

- title: título de la página.
- layout: le indica a Jekyll que tipo de página es. En este caso debe ser `category`.
- permalink: es la url relativa a esta página que se debe usar al enlazarla desde cualquier parte del sitio.
- taxonomy: es el nombre de la categoría que filtra esta página. Esta categoría se debe añadir a los posts de cada asignatura como se indica más adelante.

## _posts

En este directorio se guardan los markdowns que darán lugar a las páginas de cada asignatura por año.

Para que el motor de la página pueda indexarlos por fecha los archivos se deben nombrar de la siguiente forma:

`fechaEnFormatoIso-nombreAsignatura-AñoInicio-AñoFin.md`

```
2021-06-15-material-ecologia-bio-2-20-21.md
2022-06-15-material-ecologia-bio-2-21-22.md
```

El hecho de indicar el año de inicio y de fin de la asignatura al final del nombre del archivo es porque el motor de renderizado corta la fecha del nombre para crear el enlace a la página y si hay dos archivos con el mismo nombre de asignatura pero con distinta fecha no va a saber a donde apuntar.

La estructura es de estos archivos es igual que la de las páginas con un encabezado y el contenido en formato markdown.

El encabezado es como este:

```yaml
---
layout: single
author: raulCasado
categories:
  - Ecología Ciencias Ambientales
  - Ecología
  - Generalidades
  - Bibliografía científica
  - Poblaciones
  - UICN
title:  "Relación de contenidos de la asignatura de Ecología del grado de ciencias Ambienales en la UCO (2020 - 2021)"
header:
  overlay_color: "#5e616c"
#  overlay_image: /assets/portada_amb_2020_2021.jpg
excerpt: >
---
```

La etiqueta `author` se puede eliminar si el autor de la página es el configurado en el archivo `_config.yml` (en este caso Curro).

En `categories` se deben incluir todas las categorías donde se engloba la asignatura, pero al menos una de ellas debe ser igual que la configurada en una de las páginas que filtran por asignatura.

En este ejemplo una de las categorías es _Ecología Ciencias Ambientales_, que es la categoría que aparece en la etiqueta taxonomía del [ejemplo de página de filtrado](/README.md#asignaturas) de asignatura usado más arriba.

## assets

En este directorio se guardan las imágenes que se utilizarán en las páginas del resto del sitio, ya sean la página de inicio, páginas de filtro o posts de asignaturas.

La forma de hacer referencia con una URL relativa desde cualquier parte del sitio es `/assets/curroTed.png`.

**No se pueden anidar en directorios porque entonces Jekyll no las encuentra al renderizar las páginas.**