# Instrucciones de _Aprendiendo cosas_

[TOC]

## Estructura del repositorio

De todos los directorios que hay en el repositorio solo hay que tener en cuenta para editar la web:

- root
- _data
- _pages
- _psots
- assets

Al resto no hay que hacerle mucho caso a no ser que se rompa todo... Son directorios y archivos que genera Jekyll para renderizar los markdown que se crean y editan a mano y generar los html que realmente son las páginas que se ven.

Voy a ir describiendo los archivos que se deben modificar en cada directorio para así también describir como funciona todo.

### root

Aquí "solo" hay que editar el archivo `_config.yml`, que es donde se establece la configuración de todo el sitio en general.

[En la página de configuración de Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) se describe todo lo que se puede cambiar en `_config.yml`. Lo dejo aqúi mientras voy viendo como explicarlo todo en este documento.

Del resto de archivos que hay en la raíz solo se deberían modificar a mano excepto `README.md` y `NOTAS.md`. El resto de archivos los modifica Jekyll cuando es necesario.

### _dats