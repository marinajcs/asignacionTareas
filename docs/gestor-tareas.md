# Gestor de tareas

## Opciones consideradas

### make

* *Descripción*: Make es una herramienta de construcción que automatiza la compilación y ejecución de programas. Utiliza un archivo llamado Makefile para definir reglas y dependencias.
* *Características*: sistema de construcción de propósito general, define reglas en un Makefile, manejo de dependencias.

### gulp

* *Descripción*: Gulp es un sistema de construcción y automatización de tareas para JavaScript. Se utiliza para realizar tareas repetitivas como la minificación de archivos, la compilación de preprocesadores y más.
* *Características*: flujo de trabajo basado en secuencias, código en JavaScript, amplia gama de complementos, transparencia en la configuración.

### grunt

* *Descripción*: Grunt es otro sistema de construcción y automatización de tareas para JavaScript. Se configura utilizando un archivo Gruntfile.js y utiliza plugins para realizar tareas específicas.
* *Características*: configuración basada en tareas, gran cantidad de plugins disponibles, integración con diversas herramientas y tareas.

## Elección final

Para el desarrollo de una solución para el problema de la asignación de tareas en un piso de estudiantes, tanto Gulp como Grunt pueden ser adecuados; sin embargo, podría tener sentido 
inclinarse hacia Grunt por las siguientes razones:

* Sintaxis más estructurada: Grunt utiliza una configuración declarativa basada en objetos JSON,
lo que puede hacerla más fácil de entender en términos de tareas con dificultad limitada, al ser
más directa y suficiente.
* Abstracción de tareas: proporciona una abstracción más alta para la configuración y ejecución
de las mismas, lo que puede ser beneficioso para proyectos donde la simplicidad y facilidad de uso
son prioritarias.
* Facilidad de configuración inicial: la rapidez de configuración para poder empezar a trabajar
con Grunt es una cualidad destacable.
* Amplia variedad de complementos: si se requieren varias funcionalidades preconstruidas, Grunt es
una opción sólida, ya que puede haber un complemento específico que realice la tarea que se busca
sin necesidad de mucho código personalizado.
* Ecosistema bien establecido: ha estado en uso durante más tiempo que otros como Gulp, por
lo que tiene una comunidad establecida en la que se pueden encontrar grandes cantidades de
recursos, tutoriales y ayuda en línea para problemas concretos.