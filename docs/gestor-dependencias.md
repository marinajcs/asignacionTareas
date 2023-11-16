# Gestor de dependencias

La elección del gestor de dependencias es vital porque impacta en la eficiencia,
consistencia y control del desarrollo.

## Criterios de selección

Se han tenido en cuenta los siguientes criterios a la hora de elegir un gestor:

1. *Estándares y conformidad*: asegura la adhesión a estándares y convenciones de la industria para
una integración y desarrollo coherente
2. *Recomendaciones y comunidad*: una comunidad activa respalda la fiabilidad y evolución del gestor.
Las recomendaciones proporcionan información valiosa sobre casos de uso y soluciones.
3. *Mejores prácticas*: facilita la gestión eficiente de versiones, resolución de conflictos y prácticas
ordenadas de manejo de dependencias.

## Opciones consideradas

Una vez elegido Node.js como runtime, se han considerado los siguientes gestores:

### bun

* *Descripción*: Bun es un entorno de ejecución relativamente
nuevo para JavaScript, pero también un empaquetador y gestor de paquetes.
Es compatible si se ha elegido Node.js como runtime.
* *Características*: utiliza enlaces simbólicos, un archivo de bloqueo
binario y su gestor de paquetes está escrito en Zig. Todo esto contribuye
a que sea más rápido.

### npm

* *Descripción*: NPM es el gestor de paquetes oficial para Node.js y
JavaScript. Se utiliza para instalar, compartir y gestionar
dependencias en proyectos JavaScript.
* *Características*: repositorio de paquetes enorme, gestión de
versiones, scripts npm para automatización, instalación de
dependencias.

### yarn

* *Descripción*: Yarn es otro gestor de paquetes para JavaScript,
creado por Facebook. Se diseñó para mejorar la velocidad, la
consistencia y la seguridad en comparación con NPM.
* *Características*: instalación paralela, bloqueo de versiones,
mejora de la velocidad de instalación, instalación offline.

### pnpm

* *Descripción*: PNPM es un gestor de paquetes para JavaScript similar
a NPM, pero con un enfoque en la eficiencia al compartir dependencias
entre proyectos.
* *Características*: almacenamiento compartido de dependencias,
instalación rápida, espacio en disco eficiente, soporte para múltiples
proyectos en un único espacio de almacenamiento.

## Elección final

Al final, se ha optado por **pnpm** debido a los siguientes factores:

1. *Estándares y conformidad*: pnpm cumple con las especificaciones y estándares de
CommonJS y Node.js (el runtime escogido), lo que lo hace compatible con proyectos
y bibliotecas comunes en el ecosistema de JavaScript y TypeScript (el lenguaje
del proyecto).

2. *Recomendaciones y comunidad*: pnpm tiene una comunidad activa y creciente, y está
respaldado por desarrolladores que valoran la eficiencia en la instalación de paquetes.
Aunque puede no ser tan ampliamente conocido como npm o Yarn, ha ganado apoyo significativo
y se ha convertido en una opción recomendada en ciertos círculos de desarrollo.

3. *Mejores prácticas*: pnpm permite implementar muchas de las mismas mejores prácticas
que npm y Yarn, como la definición de dependencias en el archivo package.json, la gestión
de dependencias de desarrollo, la instalación de versiones específicas de paquetes y la
actualización segura de dependencias.
