# Docker

Elegir un buen entorno de ejecución de pruebas con Docker es crucial porque proporciona consistencia,
reproducibilidad y eficiencia al encapsular pruebas en contenedores aislados. Facilita la colaboración,
optimiza recursos y en general, mejora la calidad y velocidad del desarrollo de software.

## Criterios de selección

Se tomará una decisión con respecto a la elección de imagen base a partir de los siguientes criterios:

1. *Compatibilidad con herramientas actuales*: debe ser compatible con el runtime Node.js
y las demás herramientas instaladas actualmente en el proyecto.
2. *Tamaño y rendimiento*: lo más habitual es que una imagen que ocupe un espacio reducido
sea más rápida a la hora de iniciarse, al no tener que cargar tantos datos. El tamaño
de las imágenes se revisará en Docker Hub y el rendimiento dependerá del tiempo que tarde
en montarse la imagen a partir del `Dockerfile`.
3. *Mantenimiento*: este aspecto será evaluado se basará en cuándo fue la última vez que
se actualizó, y si recibe actualizaciones de manera frecuente, lo que se verificará en
Docker Hub.
4. *Seguridad*: no debería tener serias vulnerabilidades. Esto se comprobará según las
vulnerabilidades registradas en Docker Hub.

## Opciones consideradas

Etre las opciones de imágenes consideras para la creción de un entorno de pruebas aislado, se encuentran:

* [**Node (tag slim)**](https://hub.docker.com/_/node): imagen oficial de Node.js con herramientas esenciales
para el desarrollo.
* [**CircleCI Node**](https://hub.docker.com/r/cimg/node): imagen de Node.js optimizada para su uso
en entornos CI/CD (Continuous Integration/Continuous Deployment).
* [**Bitnami Node**](https://hub.docker.com/r/bitnami/node): imagen de Node.js de Bitnami, una pila
de aplicaciones preconfigurada para facilitar la implementación.
* [**Alpine**](https://hub.docker.com/_/alpine): imagen mínima basada en Alpine Linux, ideal para
contenedores pequeños y eficientes.
* [**Ubuntu**](https://hub.docker.com/_/ubuntu): imagen basada en el sistema operativo Ubuntu,
proporcionando un entorno más completo comparado con Alpine.
* [**Debian (tag slim)**](https://hub.docker.com/_/debian): imagen basada en Debian con una versión más
ligera, optimizada para reducir el tamaño del contenedor.

De las opciones anteriores, se evaluaron tres en concreto:

* [`node:bookworm-slim`](https://github.com/nodejs/docker-node/tree/6e6de6d890fce6946236cf403b0d5d5b33178e61/21/bookworm-slim)
* [`debian:bookworm-slim`](https://github.com/debuerreotype/docker-debian-artifacts/tree/1f1e36af44a355418661956f15e39f5b04b848b6/bookworm/slim)
* [`node:alpine`](https://github.com/nodejs/docker-node/blob/6e6de6d890fce6946236cf403b0d5d5b33178e61/21/alpine3.18)

## Elección final y justificación

En primera instancia, se podría pensar que **Alpine** es la opción más adecuada debido a sus características
principales de ser una imagen muy ligera y ejecutarse rápidamente; no obstante, en el
momento en que se evaluaron las vulnerabilidades actuales, contaba con algunos problemas
de seguridad serios, (como venía indicado en [Docker Hub](https://hub.docker.com/layers/library/node/20.9.0-alpine3.18/images/sha256-d18f4d9889b217d3fab280cc52fbe1d4caa0e1d2134c6bab901a8b7393dd5f53?context=explore)), por lo que fue descartado.

Así pues, quedaría la opción de **bookworm-slim**, una versión minimalista e interesante como base para
contenedores debido a su tamaño reducido, lo que mejora la eficiencia en el uso de recursos y la velocidad
de implementación.

Esto deja dos alternativas: usar `node:bookworm-slim` con Node.js preinstalado o
`debian:bookworm-slim`, teniendo en cuenta que debe gestionarse la instalación de una
versión de Node adecuada.

La elección de una frente a otra se realizó en base a los criterios preestablecidos:

1. *Compatibilidad con herramientas actuales*: si bien es cierto que ambas imágenes son
compatibles con Node.js y TypeScript, `node` ya tiene Node.js preinstalado mientras
que en `debian` se tuvo que instalar la versión 20.10.0 LTS de Node (recomendada para
la mayoría de usuarios por su estabilidad y seguridad).
2. *Tamaño y rendimiento*: inicialmente, `node:bookworm-slim` ocupa 70.11MB y
`debian:bookworm-slim`, 27.8MB; sin embargo, tras la ejecución de sus respectivos
`Dockerfile`, la imagen de `debian` tendrá un tamaño mayor, ya que se necesita
instalar Node.js manualmente. [Imagen tamaños finales](tams-imgs.JPG).
En cuanto al rendimiento, se tendrá en cuenta el que menor tiempo de ejecución
conlleve su construcción (`build`). Como se puede observar en las imágenes
[tejec-node](tejec-node.JPG) y [tejec-debian](tejec-debian.JPG), está claro que
`node` se construye mucho más rápido debido a que ya tiene Node.js instalado.
3. *Mantenimiento*: ambos tienen el sello de imagen oficial en Docker Hub y son actualizados
regularmente, siendo la última actualización de `debian` hace 23 días y la de `node`, 8 días.
5. *Seguridad*: bookworm-slim de tanto debian como node no presentan vulnerabilidades
críticas. Esto se puede comprobar en Docker hub: [`debian`](https://hub.docker.com/layers/library/debian/bookworm-slim/images/sha256-93ff361288a7c365614a5791efa3633ce4224542afb6b53a1790330a8e52fc7d?context=explore) y [`node`](https://hub.docker.com/layers/library/node/bookworm-slim/images/sha256-21a626e56b50b95ac0c8263b4b413e80819a2a267579f034ab454218664c08a9?context=explore.)

Una vez evaluados todos los criterios anteriores, se toma la decisión de elegir
**node:bookworm-slim** como imagen base, pues es compatible y fácil de integrar
con el proyecto, rápida, ligera y segura.
