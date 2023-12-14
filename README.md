# asignacionTareas

## Configuración de GitHub

- [Captura git conf](docs/iv-git-conf.png)

## Problema planteado

Un grupo de estudiantes que viven en un piso compartido, con diferente disponibilidad horaria (ya que algunos están ocupados durante ciertos momentos del día), tienen dificultades a la hora de coordinar las tareas domésticas de cada día de la semana de forma equitativa. Pues normalmente algunos terminan colaborando poco, y otros se ven obligados a realizar el doble de trabajo.

## Historias de usuario

Las [historias de usuario](docs/historias-usuario.md) siguiendo la metodología de personas.

## Milestones

Los [milestones](docs/milestones.md) o productos mínimamente viables.

## Toolchain

- Elección del [runtime](docs/runtime.md)
- Elección del [gestor de dependencias](docs/gestor-dependencias.md)
- Elección del [gestor de tareas](docs/gestor-tareas.md)
- Elección de las [herramientas de test](docs/herramientas-test.md)
- Elección de la [imagen base](docs/eleccion-imagen.md)

## Comprobación de sintaxis

Para ejecutar la orden que permite comprobar la sintaxis del código, el comando es:

```bash
pnpm run check
```

## Comprobación de tests

Para ejecutar la orden que permite comprobar que pasa los tests, el comando es:

```bash
pnpm run test
```

## Ejecución de tests en Docker

Para construir la imagen, se ejecuta el siguiente comando:

```bash
docker build -t marinajcs163/asignaciontareas:latest .
```

Para ejecutar el contenedor, se utiliza la orden:

```bash
docker run -u 1001 -t -v `pwd`:/app/test marinajcs163/asignaciontareas
```

Se puede descargar la imagen subida en Docker Hub ([marinajcs163/asignaciontareas](https://hub.docker.com/repository/docker/marinajcs163/asignaciontareas/tags?page=1&ordering=last_updated)), mediante la siguiente orden:

```bash
docker pull marinajcs163/asignaciontareas:latest
```
