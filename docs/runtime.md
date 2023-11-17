# Runtime

La elección del runtime es crucial en el desarrollo de software, pues determina
el entorno de ejecución del código. Esto repercute directamente en el rendimiento,
la compatibilidad y la eficiencia, e influye en la elección de otras herramientas.

## Criterios de selección

En el caso de desarrollar una aplicación que realice una asignación de tareas, los
criterios a tener en cuenta van a ser los siguientes:

1. *Compatibilidad* con el lenguaje de programación (TypeScript): es primordial
2. *Rendimiento*: tiempos de respuesta rápidos y uso eficiente de los recursos
3. *Comunidad y soporte*: para la resolución de problemas y mantenimiento de la app
4. *Facilidad de despliegue*: simplificará en gran medida la gestión de la app
5. *Seguridad*: la protección de datos es importante también, aunque en mi caso
se priorizará el rendimiento frente a la seguridad.

## Opciones consideradas

### Node.js

Entorno de ejecución basado en el motor V8 de Chrome, es ampliamente utilizado en
el desarrollo de servidores y aplicaciones en línea

### Deno

Creado por el mismo que desarrolló Node.js, fue diseñado para abordar ciertos
problemas de seguridad y diseño.

## Bun

Entorno de ejecución de JavaScript, así como los dos anteriores. Es relativamente
nuevo y promete grandes mejoras de velocidad. 

## Elección final

Finalmente, se ha optado por **Node.js**, debido a una serie de factores:

1. *Compatibilidad* con el lenguaje de programación: al igual que Deno,
es altamente compatible con TypeScript.
2. *Rendimiento*: ha sido ampliamente utilizado en entornos de producción
durante muchos años, lo que ha llevado a una optimización significativa y
a una gran cantidad de módulos y bibliotecas de terceros altamente eficientes.
El rendimiento de Node.js es generalmente más rápido que el de Deno.
3. *Comunidad y soporte*: es un entorno de ejecución para JavaScript y TypeScript
ampliamente adoptado. Cuenta con una gran comunidad de desarrolladores (más grande
que la de Deno), módulos y recursos, y respaldo de la Fundación Node.js,
garantizando un soporte duradero y fiable.
4. *Facilidad de despliegue*: tiene una amplia variedad de herramientas para el
despliegue, como una gran variedad de gestores de dependencias compatibles,
y diversas opciones para la implementación en la nube.
5. *Seguridad*: si bien es cierto que Node.js no estaba diseñado con la seguridad
como prioridad, con el tiempo se han implementado diversas mejoras. En este caso,
se prioriza el rendimiento frente a la seguridad, ya que es más importante que
funcione de forma fluida y rápida, y los datos que manejará (tareas domésticas)
no necesitan gran confidencialidad.
