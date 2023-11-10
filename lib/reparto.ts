import { Compi } from './compi';

type Tarea = {
    nombre: string;
    duracionEstimada: number;
    puntuacion: number;
}

class Reparto {

    constructor(
        readonly compis: Array<Compi>,
        readonly tareasDisponibles: Array<Tarea>,
        readonly tareasCompletadas: Array<Tarea>,
        public goal: number
    ){}

    setGoal(): void{
        let totalPuntuacion = 0;
        for (const tarea of this.tareasDisponibles) {
            totalPuntuacion += tarea.puntuacion;
        }
        this.goal = totalPuntuacion/this.compis.length;
    }

    asignarTareas(): void{
        //Dividir las tareas entre los compañeros, según sus horas disponibles

        //Debería empezar a asignar por el compi que tenga menos horas disponibles,
        //para poder tener todas las combinaciones posibles para alcanzar el goal
    }

    reiniciarSemana(): void{
        //Volcar el vector de tareas completadas en el de tareas disponibles
    }


}
