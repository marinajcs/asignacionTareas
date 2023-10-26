import { Compi } from './compi';
import { Tareas } from './interfaces';

export class ZonasComunes {
    readonly nombre: string;
    readonly propietarios: Array<Compi>;     // Array de compis que usan la zona común
    tareas: Array<Tareas>;                   // Array de tareas

constructor(nombre: string, tareas: Array<Tareas>, propietarios: Array<Compi>) {
        this.nombre = nombre;
        this.tareas = [];
        this.propietarios = [];
    }
}

