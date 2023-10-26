import { Compi } from './compi';
import { Tareas } from './interfaces';

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

