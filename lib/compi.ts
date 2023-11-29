import { Tarea } from './reparto';

export class Compi {
    public horasDisponibles: number;

    constructor(horasDisponibles: number, public prefiere?: Array<Tarea>, public detesta?: Array<Tarea>) {
        if (horasDisponibles < 0) {
            throw new Error('El compañero debe tener unas horas disponibles válidas');
        } else {
            this.horasDisponibles = horasDisponibles;
        }

    }
};