Memoría para "Ejercicio Tema1: HTML semántico y formularios"

*Análisis del diseño
El análisis nos lleva a ver 3 partes bien diferenciadas en el diseño del blog, son las siguientes:

-Se tiene una parte, que podemos llamar principal, la página de inicio, que será la que se muestra al usuario y da una visión y un resume general de lo que contiene el blog. Un conjunto de artículos con información resumida de los mismos.
-Hay otra parte más específica donde se puede acceder a la información de un artículo en concreto.
-Finalmente un formulario de contacto con los datos necesarios de la persona propietaria del blog y que publica en él.

Y con ello a continuación detallamos las etiquetas diferenciadas en 

* Bloques identificados 

Para cada una de las partes hemos identificado los siguientes bloques:

-Una cabecera que es general para las tres páginas
-El body que contiene un parte principal que sería la sección, marcada con la etiqueta section, donde se específica la parte general de cada página, 
y una parte común que sería el footer, también común para las tres páginas.

Se indican las etiquetas usadas por páginas:
	Página principal

	Detalle de la página

		Se han utilizado las etiquetas siguientes:

		<body>
			header
				En esta parte irá incluida la imagen del logo
				Nav. Donde se colocan los enlaces de navegación principales para moverse en el blog	
			Main. Que engloba la parte principal dentro del cuerpo del html
				Section: Para organizar y limitar el contenido principal, en este caso, al tratarse de un artículo, el título del mismo y el propio artículo
				Article. Donde se especifica la información concreta del artículo
					Aside: Que contiene información muy específica del artículo
			Footer. Parte común con los enlaces de navegación 
		</body>
	
	Formulario de contacto