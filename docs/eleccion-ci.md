# Integración continua (CI)

La integración continua (CI) es clave para mantener la calidad del código y
facilitar el desarrollo colaborativo. Este hito se centra en configurar la
ejecución automática de pruebas en el repositorio, garantizando la integridad
del código y previniendo errores.

## Requisitos y criterios de selección

Como requisito principal, solo se mencionarán las herramientas que sean compatibles con el
runtime Node.js y con GitHub, para poder automatizar la ejecución de tests cada vez que se
haga un push en el repositorio del proyecto.

Se tendrán en cuenta los siguientes criterios, en orden de importancia:

1. *Costo*: se busca una solución gratuita, priorizando las opciones de código abierto o
servicios de CI que cuentan con planes gratuitos con características suficientes.
2. *Comunidad y mantenimiento*: la presencia de una comunidad activa, buen soporte técnico
y una larga "esperanza de vida" mediante actualizaciones frecuentes.
3. *¿Herramienta ya seleccionada?*: en caso de cumplir las dos anteriores, si la herramienta
en cuestión ya ha sido elegida por muchos alumnos, se intentará optar por aquellas menos
exploradas.

## Herramientas consideradas

Entre las opciones de herramientas de CI, se encuentran:

* [**CircleCI**](https://circleci.com/): plataforma de CI/CD basada en la nube que permite
la construcción y prueba automatizadas de proyectos de software.
* [**Travis CI**](https://www.travis-ci.com/): servicio de CI/CD basado en la nube que facilita
la integración continua en repositorios.
* [**Drone**](https://www.drone.io/): plataforma de CI/CD basada en contenedores, ofreciendo
flexibilidad y automatización para flujos de trabajo.
* [**GitHub Actions**](https://github.com/features/actions): servicio CI/CD proporcionado por GitHub que automatiza el flujo de trabajo,
en respuesta a eventos específicos en un repositorio.
* [**Appveyor**](https://www.appveyor.com/): servicio de CI/CD para proyectos de Windows, facilitando
la construcción y despliegue.
* [**Semaphore**](https://semaphoreci.com/): plataforma de CI/CD en la nube con planes de pago y prueba gratuita,
optimizando flujos de trabajo.
* [**Cirrus**](https://cirrus-ci.org/): plataforma de CI/CD en la nube que ofrece automatización y
configuración sencilla.
* [**Buildkite**](https://buildkite.com/): plataforma de CI/CD escalable y flexible. Dispone
de planes gratuitos y de pago, con una interfaz intuitiva y flexibilidad.

## Elección final y justificación

Tras el testeo de algunas (Semaphore, Cirrus, CircleCI...) se han
seleccionado finalmente dos de ellas: `GitHub Actions` (para la
comprobación de versiones de node) y `Buildkite` (para la [ejecución
de pruebas en docker](https://www.atomicjar.com/2023/11/running-testcontainers-tests-on-buildkite/)), debido a las siguientes razones:

1. *Costo*: los servicios gratuitos ofrecidos por ambas herramientas
son más que suficientes para cumplir los requisitos del proyecto.
2. *Comunidad y mantenimiento*: GitHub Actions, como parte integral de
GitHub, cuenta con una comunidad masiva, con actualizaciones frecuentes
y soporte técnico sólido. Buildkite, aunque es un servicio más
independiente, también cuenta con una comunidad activa y su modelo
de código abierto para agentes permite una gran confianza en la
longevidad del servicio.
3. *¿Herramienta ya usada?*: principal motivo por el que se le ha
dado una oportunidad a Buildkite en lugar de otras como Travis, CircleCI,
Appveyor, Cirrus, etc.

## Versiones de Node probadas

En el workflow de GitHub Actions `node.yml`, se prueban las siguientes
versiones de Node:

1. *LTS (Long Term Support) anterior* (`lts/-1`): el lanzamiento LTS más
reciente antes del actual. Representa una versión estable y de largo
soporte.
2. *Versión actual* (`current`): es la versión más reciente y puede incluir
características más nuevas que aún no se han incorporado a las LTS. Se
prueba para comprobar que el código sea compatible con las características
más actuales de Node.js.
3. *El resto de versiones LTS* (`lts/*`): incluye todas las versiones LTS
disponibles.

También podrían haberse probado más versiones estables (las que tienen
número par) y de desarrollo (impares).
