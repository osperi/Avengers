# Memoria para "Ejercicio Tema1: HTML semántico y formularios"

### Ejercicio realizado por los componentes del equipo de trabajo "Avengers":
__Raquel Rodríguez Hernández__

__Héctor Rodríguez Iglesias__

__Oscar Pérez Riaño__

---
## Análisis del diseño
El análisis nos lleva a ver 3 partes bien diferenciadas en el diseño del blog, son las siguientes:
- Se tiene una parte, que podemos llamar principal, la página de inicio, que será la que se muestra al usuario y da una visión y un resume general de lo que contiene el blog. Un conjunto de artículos con información resumida de los mismos.
- Hay otra parte más específica donde se puede acceder a la información de un artículo en concreto.
- Finalmente un formulario de contacto con los datos necesarios de la persona propietaria del blog y que publica en él.

Y con ello a continuación detallamos las etiquetas diferenciadas en

---
## Bloques identificados

Para cada una de las partes hemos identificado los siguientes bloques:
- Una cabecera que es general para las tres páginas
- El body que contiene un parte principal que sería la sección, marcada con la etiqueta section, donde se específica la parte general de cada página,
y una parte común que sería el footer, también común para las tres páginas.

---
## Etiquetas usadas por la página principal
#### Responsable principal Oscar Pérez Riaño

Para la página `main.html` se han utilizado por su caracter semántico las siguientes etiquetas:

`<header>`
		- Usada para contener la parte común compuesta del logo del blog y de la sección del menú de navegación.

`<nav>`
		- Usada para albergar los enlaces del menú que habilita la navegación princiapl entre las páginas del blog.

`<main>`
		- Usada para englobar el contenido principal de la página.

`<section>`
		- Usada como continente de la sección que mostrará el listado del Top 6 de los artículos del blog. 
		En previsión de que la página principal pueda contener en el futuro algún otro conjunto de información asociable a nuevas secciones.

`<h3>`
		- Título de la sección mencionada en la etiqueta.
		
`<article>`
		- Usada por cada uno de los 6 elementos que componen la sección del 'Top 6 artículos'.
		Por cada elemento asociado a uno de los 6 artículos a mostrar se repiten las siguientes etiquetas:
		
- `<header>`
Contiene la imagen representativa del artículo, la sección de navegación, la sección de fecha de publicación y autoría del artículo y el resumen del artículo tratado.

- `<nav>`
Contiene e los enlaces de navegación para la categoría y el tema asignados al artículo.

- `<datetime>`
Contiene la fecha de publicación del artículo.

- `<h3>`
Contiene el título del artículo.

- `<p>`
Contiene el parrafo de resumen del artículo.

`<footer>`
		- Usada para contener la parte común del píe de página.

`<nav>`
		- Usada nuevamente para albergar los enlaces de navegación del píe de página del blog.

---
## Etiquetas usadas por la página de detalle
#### Responsable principal Raquel Rodríguez Hernández

Se han utilizado las etiquetas siguientes:

`<header>`
		- En esta parte irá incluida la imagen del logo, es algo general y común y por ese motivo irá englobada en esta tag.

`<nav>`
		- Donde se colocan los enlaces de navegación principales para moverse en el blog (Mi perfil, Añadir artículo, Añadir imagen, Juegos, Chat, Contacto). La propia definición de esta tag indica la necesidad de su uso.

`<main>`
		- Necesario para englobar la parte principal dentro del cuerpo del html.

`<section>`
		- Para organizar y limitar el contenido principal, en este caso, al tratarse de un artículo, el título del mismo y el propio artículo.

`<article>`
		- Donde se especifica la información concreta del artículo.

`<aside>`
		- Que contiene información muy específica del artículo.

`<footer>`
		- Parte común, también a todo el blog, situada en la parte inferior de la página con otros enlaces de navegación (Inicio, Ayuda, Contacto).

---
## Etiquetas usadas por la página de formulario de contacto
#### Responsable principal Héctor Rodríguez Iglesias
