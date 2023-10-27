import { Compi } from './compi';

type Tareas = {
    tarea: string;
    duracionEstimada: number;
    realizada: boolean;
}

export class ZonasComunes {
    readonly nombre: string;
    readonly propietarios: Array<Compi>;     
    tareas: Array<Tareas>;                   

constructor(nombre: string, tareas: Array<Tareas>, propietarios: Array<Compi>) {
        this.nombre = nombre;
        this.tareas = [];
        this.propietarios = [];
    }
}

