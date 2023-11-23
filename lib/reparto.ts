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
                const tiempoAsignado = this.calcularTiempoAsignado(compi, asignaciones);
                return tiempoAsignado + tarea.duracionEstimada <= compi.horasDisponibles;
            }).filter(compi => {
                const ptsAsignados = this.calcularPuntuacion(compi, asignaciones);
                return ptsAsignados < this.goal;
            });

            if (compisDisponibles.length > 0) {
                const compiAsignado = compisDisponibles[0];
                asignaciones.get(compiAsignado)!.push(tarea);
            }
        });

        this.compis.forEach(compi => {
            const ptsAsignados = this.calcularPuntuacion(compi, asignaciones);
            if (ptsAsignados < this.goal) {
                this.goal = ptsAsignados;
            }
        });

        return asignaciones;
    }

    reiniciarSemana(): void{
        //Volcar el vector de tareas completadas en el de tareas disponibles
    }

    calcularTiempoAsignado(c: Compi, asignaciones: Map<Compi, Tarea[]>): number {
        let tCompi = 0;
        const tareasAsignadas = asignaciones.get(c);

        if (tareasAsignadas) {
            tCompi = tareasAsignadas.map(tarea => tarea.duracionEstimada).reduce((total, t) => total + t, 0);

        }
        return tCompi;
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
