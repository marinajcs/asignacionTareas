import { Compi } from './compi';

type Tareas = {
    tarea: string;
    duracionEstimada: number;
    realizada: boolean;
}

export class ZonasComunes {
    constructor(
        readonly nombre: string,
        readonly propietarios: Array<Compi>,
        tareas: Array<Tareas>
    ){}
}

