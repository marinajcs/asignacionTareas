# Herramientas para testing

## Metodologías seguidas

Para el desarrollo de tests, se van a seguir dos metodologías que se centran en la
creación de pruebas tempranas antes de escribir el código de la aplicación:

### TDD (Test-Driven Development)

TDD se centra principalmente en las pruebas unitarias, que son pruebas que verifican el
comportamiento de unidades individuales de código (como funciones o métodos).

TDD sigue un ciclo de desarrollo iterativo y repetitivo: *Red-Green-Refactor*:
1. Red: se escribe una prueba que falle porque la funcionalidad aún no está implementada.
2. Green: se escribe el código mínimo necesario para que la prueba pase.
3. Refactor: se mejora el código existente sin cambiar su comportamiento, manteniendo las
pruebas pasadas.

TDD determina cuándo se escriben los tests.

### BDD (Behavior-Driven Development)

BDD se centra en el comportamiento del sistema desde la perspectiva del usuario. Las pruebas
se expresan en un lenguaje natural comprensible por las personas involucradas en el proyecto.

Las pruebas en BDD se escriben en forma de escenarios que describen el comportamiento deseado
del sistema. Estos escenarios son generalmente escritos en un formato llamado Gherkin, que
utiliza palabras clave como *given*, *when* y *then*.

BDD determina el tipo de aserciones utilizadas.

## Criterios de selección

Se han tenido en cuenta los siguientes criterios para la elección de herramientas:

1. *Estándares y conformidad*: que cumpla los estándares relevantes de la industria
de desarrollo de software, que sea compatible con el lenguaje (TypeScript) y el runtime
(Node.js) elegidos.
2. *Recomendaciones y comunidad*: una comunidad grande y activa casi siempre
implica un buen soporte y disponibilidad de recursos y ayuda de otros usuarios.
3. *Mejores prácticas*: que las herramientas sigan buenas prácticas de software
como la capacidad de mantener casos de prueba de forma eficiente, la ejecución
paralela y la creación de informes concisos.

## Aserciones

Las aserciones o matchers son funciones que comparan la salida obtenida con
la esperada, incluyendo mensajes si la comparación es positiva.

Teniendo en cuenta que debe ser compatible con el enfoque de BDD, las opciones consideradas
han sido las siguientes:
* **Chai**: es una biblioteca de aserciones flexible que se puede utilizar con diversos estilos de BDD. Ofrece las interfaces *expect*, *should*, y *assert*, lo que permite elegir el estilo
que mejor se adapte a las preferencias de uno.
* **Jest**: es un marco de prueba que incorpora su propia biblioteca de aserciones y se integra bien con BDD. Utiliza una sintaxis sencilla y es conocido por su configuración fácil y rápida.
* **Earl**: biblioteca de aserciones para JavaScript que busca proporcionar mensajes de error detallados y
comprensibles. Ofrece una sintaxis similar a la de las aserciones estándar de JavaScript y permite
realizar comparaciones más avanzadas, como verificar propiedades de objetos anidados.
* **Assert Node.js**: Node.js incluye un módulo de aserciones nativo llamado assert. Este módulo proporciona funciones simples para realizar aserciones en entornos Node.js. Aunque es básico en comparación con algunas bibliotecas externas.
* **Jasmine**: es un framework all-in-one que incluye tanto el marco de pruebas como la biblioteca de
aserciones. Utiliza un estilo de desarrollo conducido BDD que enfatiza la legibilidad y la comprensión
del código de prueba. Su propio conjunto de Matchers para realizar aserciones de manera clara y expresiva.


La elección final entre las aserciones anteriores han sido las de **Jasmine**, debido a los siguientes
factores:
1. *Estándares y conformidad*: Jasmine utiliza una sintaxis clara y legible que facilita la escritura y
comprensión de las pruebas. Sus bloques *describe* y *it* proporcionan una estructura organizada para
las especificaciones y *suites* de prueba. Además, se alinea con el enfoque de BDD que se ha elegido
seguir.
2. *Recomendaciones y comunidad*: Jasmine tiene una comunidad activa y amplia, así que se pueden
encontrar una gran cantidad de recursos en línea y soluciones a problemas comunes, por no mencionar
que ha sido adoptado en muchos proyectos y organizaciones, lo que respalda su confiabilidad y
estabilidad.
3. *Mejores prácticas*: Jasmine se integra bien con otras herramientas y marcos comunes, ofrece
funciones integradas para realizar operaciones como mocking y espionaje, soporte para matchers
personalizados, etc. Todo esto facilita la implementación de buenas prácticas en el desarrollo
de pruebas.

## Test runners/frameworks

Una vez escogidas las aserciones de Jasmine, se pueden utilizar un conjunto de herramientas que se
integren bien con este entorno. Se han considerado los siguientes frameworks de testing:

* **Jest**: como se ha mencionado anteriormente, es un marco de prubea conocido por su configuración
fácil y rápida. Aunque tiene su propio conjunto de aserciones, también es compatible con las de Jasmine.
* **Mocha**: es un framework de pruebas popular que ofrece flexibilidad y soporte para aserciones de
diferentes bibliotecas, pudiendo usar Mocha con aserciones Jasmine para las pruebas.
* **Jasmine**: puede ejecutarse directamente en Node.js sin necesidad de un test runner externo,
instalando el paquete `jasmine`.

Dado que **Jasmine** ya de por sí es un marco de pruebas completo, se ha optado por este framework que
ya tiene incluido su propio test runner. Los [criterios de selección](#aserciones) seguidos han sido los
mismos que en el apartado anterior.

## Herramientas CLI para la ejecución de tests

Para poder ejecutar tests escritos con Jasmine, se puede usar `jasmine-cli` o entornos CLI
de otros frameworks, aunque supone la instalación adicional e innecesaria de más herramientas.
Es conveniente hacer uso de los gestores **pnpm** y **grunt**, ya instalados y configurados
en el proyecto.

