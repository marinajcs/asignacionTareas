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
* **Chai**: es una biblioteca de aserciones flexible que se puede utilizar con diversos estilos
de BDD. Ofrece las interfaces *expect*, *should*, y *assert*, lo que permite elegir el estilo
que mejor se adapte a las preferencias de uno.
* **Jest**: es un marco de prueba que incorpora su propia biblioteca de aserciones y se integra bien
con BDD. Utiliza una sintaxis sencilla y es conocido por su configuración fácil y rápida.
* **Earl**: biblioteca de aserciones para JavaScript que busca proporcionar mensajes de error
detallados y comprensibles. Ofrece una sintaxis similar a la de las aserciones estándar de JavaScript
y permite realizar comparaciones más avanzadas, como verificar propiedades de objetos anidados.
* **Assert Node.js**: Node.js incluye un módulo de aserciones nativo llamado assert. Este módulo
proporciona funciones simples para realizar aserciones en entornos Node.js. Aunque es básico en
comparación con algunas bibliotecas externas.
* **Jasmine**: es un framework all-in-one que incluye tanto el marco de pruebas como la biblioteca de
aserciones. Utiliza un estilo de desarrollo conducido BDD que enfatiza la legibilidad y la comprensión
del código de prueba. Su propio conjunto de Matchers para realizar aserciones de manera clara y expresiva.


La elección final entre las aserciones anteriores han sido las de **Chai**, debido a los siguientes
factores:
1. *Estándares y conformidad*: Chai se destaca por aserciones expresivas y legibles, facilitando la
comprensión de las pruebas. Su sintaxis tipo BDD contribuye a una interpretación más clara del código.
Ofrece flexibilidad con varios estilos de aserciones (should, expect, assert), permitiendo adoptar el estilo
que mejor se alinee con cada usuario.
2. *Recomendaciones y comunidad*: Chai es muy utilizado en la comunidad, con una base de usuarios activa
y abundante soporte y recursos disponibles en línea. Además, se integra de forma eficiente con varias
herramientas y marcos de pruebas, lo que simplifica su implementación en diversos proyectos, incluyendo
una fácil compatibilidad con test runners como Mocha y Jasmine.
3. *Mejores prácticas*: Chai se integra bien con otras herramientas y marcos comunes. Permite agregar
aserciones personalizadas, lo que fomenta la adaptación a casos de uso específicos y la creación de
pruebas más específicas y significativas. Chai tiene tipos de TypeScript oficialmente mantenidos
(@types/chai), lo que facilita la integración y proporciona una experiencia de desarrollo más sólida.


## Test runners/frameworks

Una vez escogidas las aserciones de Chai, se pueden utilizar un conjunto de herramientas que se
integren bien con este entorno. Se han considerado los siguientes frameworks de testing:

* **Jest**: como se ha mencionado anteriormente, es un marco de prubea conocido por su configuración
fácil y rápida. Aunque tiene su propio conjunto de aserciones, también es compatible con las de Jasmine.
* **Mocha**: es un framework de pruebas popular que ofrece flexibilidad y soporte para aserciones de
diferentes bibliotecas, pudiendo usar Mocha con aserciones Chai para las pruebas.
* **Jasmine**: puede ejecutarse directamente en Node.js sin necesidad de un test runner externo,
instalando el paquete `jasmine`.

La elección final entre los test runners anteriores ha sido **Mocha**, debido a los siguientes
factores:
1. *Estándares y conformidad*: Mocha admite múltiples estilos de escritura de pruebas y permite
adoptar convenciones que se adapten a distintas preferencias (describe, it, suite, test...). Chai
y Mocha es una combinación bastante habitual, pues se integran muy bien entre sí.
2. *Recomendaciones y comunidad*: Mocha cuenta con una amplia adopción y popularidad en la comunidad,
documentación completa y recursos en línea, integración con otras herramientas y un ecosistema robusto.
3. *Mejores prácticas*: Mocha dispone de soporte eficiente para pruebas asíncronas, utilización de hooks
y suites jerárquicas para configuración y limpieza... En general, permite adoptar buenas prácticas en el
desarrollo de tests.

## Herramientas CLI para la ejecución de tests

Para poder ejecutar los tests escritos no se requiere la instalación adicional de más herramientas.
La interfaz de línea de comandos ya viene integrada en el test runner, así que bastaría con la
terminal y los gestores ya configurados (pnpm y grunt) para poder realizar la ejecución de tests.

