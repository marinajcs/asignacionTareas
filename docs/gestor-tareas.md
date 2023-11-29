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

## npm run

* *Descripción*: gestor de paquetes predeterminado para Node.js.
* *Características*: ejecuta scripts definidos en el archivo package.json y mantiene un registro centralizado de dependencias.

## pnpm run

* *Descripción*: Administrador de paquetes para Node.js con almacenamiento compartido.
* *Características*: comparte dependencias para conservar espacio, instalación rápida y eficiente y ejecuta scripts del archivo package.json.


## yarn run

* *Descripción*: Alternativa a npm, también es un administrador de paquetes para Node.js.
* *Características*: instalación rápida y consistente, ejecuta scripts del archivo package.json.

## grunt (descartado)

* *Descripción*: Grunt es otro sistema de construcción y automatización de tareas para JavaScript. Se configura utilizando un archivo Gruntfile.js y utiliza plugins para realizar tareas específicas.
* *Características*: configuración basada en tareas, gran cantidad de plugins disponibles, integración con diversas herramientas y tareas.

## Elección final

Inicialmente se optó por usar **Grunt**, debido a su configuración basada en archivos y estructura modular, y su comunidad activa y
antigüedad. Sin embargo, durante la etapa de desarrollo de tests se pudo observar que la ejecución de `grunt` obligaba a tenerlo
instalado localmente en el proyecto (y por tanto ser una dependencia del mismo), lo que supondría mayores complicaciones
en futuros objetivos. Por este motivo, se tomó la decisión de cambiar la elección del task manager.

La decisión que menores cambios convendría sería migrar la automatización de tareas a **pnpm run**, además de ser una opción
razonable tener por los siguientes motivos:

1. *Estándares y conformidad*: pnpm run es parte del ecosistema de herramientas de Node.js y npm. Sigue los estándares
comunes en el desarrollo basado en Node.js y npm, lo que garantiza coherencia en el desarrollo y la integración con
otras herramientas del ecosistema.
3. *Recomendaciones y comunidad*: aunque puede ser visto más como un gestor de paquetes que uno de tareas, sigue siendo
una parte integral del ecosistema Node.js. Tiene una comunidad activa que respalda su desarrollo y evolución, y puede
beneficiarse de las experiencias y recomendaciones compartidas por la comunidad de Node.js y npm.
5. *Mejores prácticas*:  se integra con el sistema de scripts de npm, permitiendo la ejecución de tareas personalizadas.
Se pueden definir y ejecutar scripts en el archivo package.json, similar a cómo se hacía con Grunt, pero sin la necesidad
de cargar tantos plugins.

Otras ventajas frente a otros gestores de tareas incluyen:
* Espacio de almacenamiento eficiente: pnpm utiliza un mecanismo de almacenamiento compartido que permite a múltiples
proyectos compartir las dependencias. Esto reduce significativamente el espacio de almacenamiento necesario en comparación con otros gestores de paquetes, como npm o yarn, que duplican las dependencias para cada proyecto.
* Instalación rápida de paquetes: pnpm realiza la instalación de paquetes de manera más eficiente gracias al uso de enlaces
simbólicos y la reutilización de dependencias entre proyectos. Esto puede resultar en tiempos de instalación más rápidos,
especialmente en proyectos con muchas dependencias compartidas.
* Gestión de versiones mejorada: permite una gestión de versiones más flexible y eficiente. Se pueden instalar y actualizar
paquetes de forma independiente, lo que facilita la actualización de dependencias sin afectar a todo el proyecto.
