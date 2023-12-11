# Docker

Elegir un buen entorno de ejecución de pruebas con Docker es crucial porque proporciona consistencia,
reproducibilidad y eficiencia al encapsular pruebas en contenedores aislados. Facilita la colaboración,
optimiza recursos y en general, mejora la calidad y velocidad del desarrollo de software.

## Criterios de selección

Se tomará una decisión con respecto a la elección de imagen base a partir de los siguientes criterios:
1. *Compatibilidad con herramientas actuales*: debe ser compatible con el runtime Node.js y las
demás herramientas instaladas actualmente en el proyecto.
2. *Tamaño y rendimiento*: lo más habitual es que una imagen que ocupe un espacio reducido
sea más rápida a la hora de iniciarse, al no tener que cargar tantos datos.
3. *Mantenimiento*: este aspecto será evaluado se basará en cuándo fue la última vez que se actualizó,
y si recibe actualizaciones de manera frencuente.
4. *Seguridad*: no debería tener serias vulnerabilidades. Esto se comprobará según Snyk Advisor.

## Opciones consideradas

Etre las opciones de imágenes consideras para la creción de un entorno de pruebas aislado, se encuentran:
* [**Node (variante slim)**](https://hub.docker.com/_/node): imagen oficial de Node.js con herramientas esenciales
para el desarrollo.
* [**CircleCI Node**](https://hub.docker.com/r/cimg/node): imagen de Node.js optimizada para su uso
en entornos CI/CD (Continuous Integration/Continuous Deployment).
* [**Bitnami Node**](https://hub.docker.com/r/bitnami/node): imagen de Node.js de Bitnami, una pila
de aplicaciones preconfigurada para facilitar la implementación.
* [**Alpine**](https://hub.docker.com/_/alpine): imagen mínima basada en Alpine Linux, ideal para
contenedores pequeños y eficientes.
* [**Ubuntu**](https://hub.docker.com/_/ubuntu): imagen basada en el sistema operativo Ubuntu,
proporcionando un entorno más completo comparado con Alpine.
* [**Debian (variante slim)**](https://hub.docker.com/_/debian): imagen basada en Debian con una versión más
ligera, optimizada para reducir el tamaño del contenedor.

## Elección final

En primera instancia, se podría pensar que Alpine es la opción más adecuada debido a sus características
principales de ser una imagen muy ligera y ejecutarse rápidamente; no obstante, cuenta con algunos problemas
de seguridad y vulnerabilidades serias (como viene indicado en [Snyk Advisor](https://snyk.io/advisor/docker/alpine)).

Por tanto, se ha optado por otra opción, la variante **slim** de Debian, en concreto, [`debian:bookworm-slim`](https://github.com/debuerreotype/docker-debian-artifacts/tree/1f1e36af44a355418661956f15e39f5b04b848b6/bookworm/slim),
debido a los siguientes factores:
1. *Compatibilidad con herramientas actuales*: aunque no viene con Node.js y TypeScript preinstalados,
se puede gestionar la descarga de ciertas versiones con **nvm**.
2. *Tamaño y rendimiento*: Debian ocupa 49.6MB normalmente. La variante slim permite una mayor velocidad de ejecución
al contar con un tamaño reducido.
3. *Mantenimiento*: Debian tiene el sello de imagen oficial en Docker Hub y es actualizado regularmente,
siendo la última hace 20 días.
4. *Seguridad*: a diferencia de Alpine, no cuenta con ninguna vulnerabilidad seria, como se puede comprobar con
[Snyk Advisor](https://snyk.io/advisor/docker/debian).