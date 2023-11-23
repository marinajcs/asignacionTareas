import { Compi } from './compi';

export type Tarea = {
    duracionEstimada: number;
    puntuacion: number;
}

export class Reparto {

    private goal: number;
    private tareasCompletadas: Array<Tarea>;

    constructor(readonly compis: Array<Compi>, readonly tareasDisponibles: Array<Tarea>){
        this.goal = this.calcularGoal(compis, tareasDisponibles);
        this.tareasCompletadas = new Array<Tarea>();
    }

    calcularGoal(compis:Array<Compi>, tareasDisponibles:Array<Tarea>): number{
        const totalPts = tareasDisponibles.map(tarea => tarea.puntuacion).reduce((total, pts) => total + pts, 0);
        return totalPts/compis.length;
    }

    getGoal(): number {
        return this.goal;
    }

    asignarTareas(): Map<Compi,Tarea[]> {
        let asignaciones = new Map<Compi, Tarea[]>();
        //Dividir las tareas entre los compañeros, según sus horas disponibles
        //Debería empezar a asignar por el compi que tenga menos horas disponibles,
        //para poder tener todas las combinaciones posibles para alcanzar el goal

        this.compis.forEach(compi => asignaciones.set(compi, []));
        // Ordenar de menor a mayor horas disponibles
        const compisOrdenados = [...this.compis].sort((a,b) => a.horasDisponibles - b.horasDisponibles);
        // Ordenar de mayor a menor puntuación
        const tareasOrdenadas = [...this.tareasDisponibles].sort((a,b) => a.puntuacion - b.puntuacion);

        tareasOrdenadas.forEach(tarea => {
            const compisDisponibles = compisOrdenados.filter(compi => {
                const tiempoAsignado = asignaciones.get(compi)!.reduce((total, t) => total + t.duracionEstimada, 0);
                return tiempoAsignado + tarea.duracionEstimada <= compi.horasDisponibles;
            }).filter(compi => {
                const ptsAsignados = asignaciones.get(compi)!.reduce((total, t) => total + t.puntuacion, 0);
                return ptsAsignados < this.goal;
            });

            if (compisDisponibles.length > 0) {
                const compiAsignado = compisDisponibles[0];
                asignaciones.get(compiAsignado)!.push(tarea);
            }
        });

        return asignaciones;
    }

    reiniciarSemana(): void{
        //Volcar el vector de tareas completadas en el de tareas disponibles
    }

    calcularPuntuacion(c: Compi, asignaciones: Map<Compi,Tarea[]>): number{
        return 0;
    }




}
