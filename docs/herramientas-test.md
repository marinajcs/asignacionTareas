# Herramientas para testing

## Metodologías seguidas

Para el desarrollo de tests, se van a seguir dos metodologías:

1. TDD: determina cuándo se escriben los tests (antes de escribir el código de la app)
2. BDD: determina el tipo de aserciones utilizadas (deben usar una sintaxis más cercana
al lenguaje natural)

## Criterios de selección

Se han tenido en cuenta los siguientes criterios para la elección de herramientas:

1. *Estándares y conformidad*: que cumpla los estándares relevantes de la industria
de desarrollo de software, que sea compatible con el lenguaje (TypeScript) y el runtime
(Node.js) elegidos.
2. *Comunidad y popularidad*: una comunidad grande y activa; es decir con una gran cantidad
de contribuidores y un elevado índice de uso entre los usuarios, casi siempre implica
gran disponibilidad de recursos y ayuda de otros usuarios.
3. *Mantenimiento*: se considerará que tiene un buen soporte en base a la frecuencia
de actualizaciones y últimas versiones de la herramienta a evaluar.
4. *Mejores prácticas*: que las herramientas sigan buenas prácticas de software
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
* **Assert Node.js**: Node.js incluye un módulo de aserciones nativo llamado assert. Este módulo
proporciona funciones simples para realizar aserciones en entornos Node.js. Aunque es básico en
comparación con algunas bibliotecas externas.
* **Jasmine**: es un framework all-in-one que incluye tanto el marco de pruebas como la biblioteca de
aserciones. Utiliza un estilo de desarrollo conducido BDD que enfatiza la legibilidad y la comprensión
del código de prueba. Su propio conjunto de matchers para realizar aserciones de manera clara y expresiva.
* **AVA**: es un marco de pruebas completo, pero también cuenta con sus propias funciones de aserción,
que son simples y expresivas para facilitar la escritura de pruebas.


Se han descartado bibliotecas de aserciones como Expect.js Should.js, unexpected, Earl y Power Assert
porque, aunque cumplían los requisitos de compatibilidad, su puntuación de "salud" era menor o igual que 70, debido a su descenso en popularidad o falta de mantenimiento.

La elección final entre las aserciones anteriores ha sido las de **Chai**, con una sorprendente
puntuación de 97/100 según [Snyk Advisor](https://snyk.io/advisor/npm-package/chai), debido a los siguientes
factores:
1. *Estándares y conformidad*: Chai se destaca por aserciones expresivas y legibles, facilitando la
comprensión de las pruebas. Su sintaxis tipo BDD contribuye a una interpretación más clara del código.
Ofrece flexibilidad con varios estilos de aserciones (should, expect, assert), permitiendo adoptar el estilo
que mejor se alinee con cada usuario.
2. *Comunidad y popularidad*: Chai es muy adoptado en la comunidad, con una media de 8.386.880 descargas
semanales, localizándose en el top 5% más utilizado y con alrededor de 160 contribuidores.
3. Mantenimiento: es actualizado con gran frecuencia, su última versión fue hace dos meses desde el 27/11.
4. *Mejores prácticas*: Chai se integra bien con otras herramientas y marcos comunes. Permite agregar
aserciones personalizadas, lo que fomenta la adaptación a casos de uso específicos y la creación de
pruebas más específicas y significativas. Chai tiene tipos de TypeScript oficialmente mantenidos
(@types/chai), lo que facilita la integración y proporciona una experiencia de desarrollo más sólida.

## Test runners/frameworks

Una vez escogidas las aserciones de Chai, se pueden utilizar un conjunto de herramientas que se
integren bien con este entorno. Se han considerado los siguientes frameworks de testing:

* **Jest**: es un marco de prueba conocido por su configuración fácil y rápida. Aunque tiene su propio
conjunto de aserciones (basadas en las de Jasmine), también es compatible con las de Chai.
* **Mocha**: es un framework de pruebas popular que ofrece flexibilidad y soporte para aserciones de
diferentes bibliotecas, pudiendo usar Mocha con aserciones Chai para las pruebas.
* **Jasmine**: puede ejecutarse directamente en Node.js sin necesidad de un test runner externo,
instalando el paquete `jasmine`.
* **AVA**: es un marco de pruebas que destaca por su simplicidad, velocidad y capacidad de ejecución
concurrente de tests. Es compatible con las aserciones de Chai.
* **Tape**: es un framework de pruebas todo en uno caracterizado por ser simple, liviano y seguir
el formato TAP (Test Anything Protocol). Puede usarse junto con las aserciones de Chai.

La elección final entre los test runners anteriores ha sido **Mocha** con una postiva
puntuación de 87/100 según [Snyk Advisor](https://snyk.io/advisor/npm-package/mocha), debido a los siguientes
factores:
1. *Estándares y conformidad*: Mocha admite múltiples estilos de escritura de pruebas y permite
adoptar convenciones que se adapten a distintas preferencias (describe, it, suite, test...). Chai
y Mocha  se integran muy bien entre sí.
2. *Comunidad y popularidad*: Mocha cuenta con un ecosistema robusto, compuesto por unos 430 contribuidores,
financiación y una base de usuarios amplia (media de 7.195.110 descargas por semana), situándose en el top 5%
de herramientas más utilizadas.
3. *Mantenimiento*: es aceptable y dentro de lo que se consideraría saludable, siendo su última versión
hace 12 meses y la última actualización, hace 8 desde el 27/11.
4. *Mejores prácticas*: Mocha dispone de soporte eficiente para pruebas asíncronas, utilización de hooks
y suites jerárquicas para configuración y limpieza... En general, permite adoptar buenas prácticas en el
desarrollo de tests.

## Herramientas CLI para la ejecución de tests

Para poder ejecutar los tests escritos no se requiere la instalación adicional de más herramientas.
La interfaz de línea de comandos ya viene integrada en el test runner, así que bastaría con la
terminal y los gestores ya configurados (pnpm y grunt) para poder realizar la ejecución de tests.

