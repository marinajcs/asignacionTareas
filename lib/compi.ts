import { Tarea } from './reparto';

export class Compi {
    constructor(
        readonly horasDisponibles: number,
        public prefiere?: Array<Tarea>,
        public detesta?: Array<Tarea>) {}

}