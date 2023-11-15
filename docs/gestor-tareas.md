# Gestor de tareas

La elección de un gestor de tareas en un proyecto es crucial para automatizar
tareas repetitivas, procesos como la compilación y las pruebas, y asegurar
un flujo de trabajo eficiente durante el desarrollo.

## Criterios de selección

1. *Estándares y conformidad*: que siga estándares para garantizar la coherencia en el
desarrollo y la integración con otras herramientas.
3. *Recomendaciones y comunidad*: una comunidad activa respalda la fiabilidad y evolución
del gestor. Las recomendaciones ofrecen información sobre casos de uso y buenas prácticas.
5. *Mejores prácticas*: facilita la automatización de tareas, ejecución de pruebas y
otras prácticas de desarrollo eficientes.

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

1. *Estándares y conformidad*: Grunt sigue estándares para garantizar la coherencia en el desarrollo
y la integración con otras herramientas. Su configuración basada en archivos y su estructura modular permiten que los desarrolladores sigan convenciones y prácticas comunes en el desarrollo web,
lo que facilita la colaboración y la interoperabilidad con otras herramientas y sistemas.
2. *Recomendaciones y comunidad*: Grunt tiene una comunidad activa respaldando su fiabilidad y evolución.
Aunque Gulp también tiene una comunidad fuerte, Grunt ha existido por más tiempo y ha acumulado un sólido
respaldo en la comunidad de desarrollo web. Las recomendaciones y experiencias compartidas por esta
comunidad pueden ser valiosas al abordar casos de uso específicos en una aplicación de asignación de tareas.
3. *Mejores prácticas*: Grunt ofrece una amplia variedad de complementos (plugins) que simplifican la automatización de tareas comunes en el desarrollo web, ya que puede haber un complemento específico que
realice la tarea que se busca siguiendo buenas prácticas. Además, al seguir una configuración basada en archivos, Grunt se integra sin problemas en el flujo de trabajo de desarrollo.

Otras ventajas frente a Gulp incluyen:
* Sintaxis más estructurada: Grunt utiliza una configuración declarativa basada en objetos JSON,
lo que puede hacerla más fácil de entender en términos de tareas con dificultad limitada, al ser
más directa y suficiente.
* Abstracción de tareas: proporciona una abstracción más alta para la configuración y ejecución
de las mismas, lo que puede ser beneficioso para proyectos donde la simplicidad y facilidad de uso
son prioritarias.
* Facilidad de configuración inicial: la rapidez de configuración para poder empezar a trabajar
con Grunt es una cualidad destacable.
