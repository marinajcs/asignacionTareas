import { Tarea } from './reparto';

export class Compi {
    private _horasDisponibles: number;
    
    constructor(readonly horasDisponibles: number, public prefiere?: Array<Tarea>, public detesta?: Array<Tarea>) {
        if (horasDisponibles < 0) {
            throw new Error('El compañero debe tener unas horas disponibles válidas');
        } else {
            this._horasDisponibles = horasDisponibles;
        }

    }
};