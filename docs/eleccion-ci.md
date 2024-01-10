# Integración continua (CI)

La integración continua (CI) es clave para mantener la calidad del código y
facilitar el desarrollo colaborativo. Este hito se centra en configurar la
ejecución automática de pruebas en el repositorio, garantizando la integridad
del código y previniendo errores.

## Criterios de selección

Se tomará una decisión con respecto a la elección de imagen base a partir de los siguientes criterios:

1. *Compatibilidad con herramientas actuales*: debe ser compatible con el runtime Node.js,
y poder integrarse en el repositorio de GitHub
2. *Costo*: se busca una solución gratuita, priorizando las opciones de código abierto o
servicios de CI gratuitos con características suficientes el proyecto.
3. *Comunidad y mantenimiento*: la presencia de una comunidad activa, buen soporte técnico
y una larga "esperanza de vida" mediante actualizaciones frecuentes.
4. *¿Herramienta ya seleccionada?*: si ya ha sido elegida por muchos alumnos, se descartará,
optando por herramientas menos exploradas para enriquecer el trabajo de investigación.

## Herramientas consideradas

Etre las opciones de herramientas de CI, se encuentran:

* [**Jenkins**](https://www.jenkins.io/): herramienta de automatización de código abierto
para construir, probar y desplegar software. Se terminó descartando
debido a su alta complejidad de configuración y al mayor esfuerzo
que requería su mantenimiento y administración.
* [**CircleCI**](https://circleci.com/): plataforma de CI/CD basada en la nube que permite
la construcción y prueba automatizadas de proyectos de software. Es
una opción sólida en general,aunque ya ha sido escogida varias veces.
* [**Atlassian Bamboo**](https://www.atlassian.com/es/software/bamboo): solución de CI/CD de Atlassian. Requiere
licencias de pago, lo que la descarta automáticamente.
* [**GitLab**](https://about.gitlab.com/): plataforma de desarrollo de ciclo de vida completo
que incluye funciones de CI/CD. Al ser un proyecto en GitHub, su
integración no es tan conveniente.
* [**Bitbucket**](https://bitbucket.org/product/es/features/pipelines): servicio de desarrollo de software que incluye
funciones de CI/CD. Mismo problema que con GitLab, están pensadas
para usarse de forma independiente, ya que requeriría la creación de
un proyecto entero en Bitbucket.
* [**Travis CI**](https://www.travis-ci.com/): servicio de CI/CD basado en la nube. Opción sólida
e interesante, aunque ya ha sido escogida por bastantes alumnos.
* [**TeamCity**](https://www.jetbrains.com/es-es/teamcity/): herramienta de CI/CD de JetBrains. De pago con una
versión gratis de varios días disponible.
* [**Drone**](https://www.drone.io/): plataforma de CI/CD basada en contenedores.
* [**Appveyor**](https://www.appveyor.com/): servicio de CI/CD para proyectos de Windows. Es una
opción interesante, pero ya ha sido escogida por varios alumnos.
* [**Semaphore**](https://semaphoreci.com/): plataforma de CI/CD en la nube. Opción sólida, pero
es de pago (aunque incluye una prueba gratis de varios días).
* [**Cirrus**](https://cirrus-ci.org/): plataforma de CI/CD en la nube. Opción sólida, pero
se ha seleccionado ya por algunos alumnos.
* [**Buildkite**](https://buildkite.com/): plataforma de CI/CD escalable y flexible. Dispone
de planes gratuitos y de pago, con una interfaz intuitiva y flexibilidad.

## Elección final y justificación

Tras el testeo de algunas (Semaphore, Cirrus, CircleCI...) se han
seleccionado finalmente dos de ellas: `GitHub Actions` (para la
comprobación de versiones de node) y `Buildkite` (para la [ejecución
de pruebas en docker](https://www.atomicjar.com/2023/11/running-testcontainers-tests-on-buildkite/)), debido a las siguientes razones:

1. *Compatibilidad con herramientas actuales*: tanto GitHub Actions
como Buildkite son compatibles con GitHub y Docker. GitHub Actions
ofrece soporte nativo para Node.js y Docker y Buildkite es una
plataforma flexible y escalable que permite integrarse con diversos entornos.
2. *Costo*: los servicios gratuitos ofrecidos por ambas herramientas
son más que suficientes para cumplis los requisitos del proyecto.
3. *Comunidad y mantenimiento*: GitHub Actions, como parte integral de
GitHub, cuenta con una comunidad masiva, con actualizaciones frecuentes
y soporte técnico sólido. Buildkite, aunque es un servicio más
independiente, también cuenta con una comunidad activa y su modelo
de código abierto para agentes permite una gran confianza en la
longevidad del servicio.
4. *¿Herramienta ya usada?*: principal motivo por el que se han
descartado Travis, CircleCI, Appveyor, etc, y por el cual se le ha
dado una oportunidad a Buildkite.

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
