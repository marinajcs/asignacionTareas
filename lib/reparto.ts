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
        if (this.compis.length === 0) {
            throw new Error('El array de compañeros no puede estar vacío');
        }
        let asignaciones = new Map<Compi, Tarea[]>();

        this.compis.forEach(compi => asignaciones.set(compi, []));
        // Ordenar de menor a mayor horas disponibles
        const compisOrdenados = [...this.compis].sort((a,b) => a.horasDisponibles - b.horasDisponibles);
        // Ordenar de mayor a menor puntuación
        const tareasOrdenadas = [...this.tareasDisponibles].sort((a,b) => b.puntuacion - a.puntuacion);

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
        let ptsCompi = 0;
        const tareasAsignadas = asignaciones.get(c);

        if (tareasAsignadas) {
            ptsCompi = tareasAsignadas.map(tarea => tarea.puntuacion).reduce((total, pts) => total + pts, 0);

        }
        return ptsCompi;
    }




}
