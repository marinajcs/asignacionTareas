import { Compi } from './compi';

export type Tarea = {
    duracionEstimada: number;
    puntuacion: number;
}

export class Reparto {

    constructor(
        readonly compis: Array<Compi>,
        readonly tareasDisponibles: Array<Tarea>,
    ){}

    calcularGoal(): number{
        let totalPuntuacion = 0;
        for (const tarea of this.tareasDisponibles) {
            totalPuntuacion += tarea.puntuacion;
        }
        return totalPuntuacion/this.compis.length;
    }

    asignarTareas(): Map<Compi,Tarea[]> {
        let asignaciones = new Map<Compi, Tarea[]>();
        //Dividir las tareas entre los compañeros, según sus horas disponibles
        //Debería empezar a asignar por el compi que tenga menos horas disponibles,
        //para poder tener todas las combinaciones posibles para alcanzar el goal
        return asignaciones;
    }

    reiniciarSemana(): void{
        //Volcar el vector de tareas completadas en el de tareas disponibles
    }

    calcularPuntuacion(c: Compi, asignaciones: Map<Compi,Tarea[]>): number{
        return 0;
    }


}
