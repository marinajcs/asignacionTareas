import { Compi } from './compi';

export type Tarea = {
    duracionEstimada: number;
    puntuacion: number;
};

export class Reparto {

    private goal: number;
    private tareasDisponibles: Array<Tarea>;
    private compis: Array<Compi>;

    constructor(readonly compis_a_asignar: Array<Compi>, readonly tareas_a_asignar: Array<Tarea>) {
        if (compis_a_asignar.length === 0) {
            throw new Error('El array de compañeros no puede estar vacío');
        }
        this.compis = new Array<Compi>();
        this.compis_a_asignar.forEach(c => this.addCompi(c));

        this.tareasDisponibles = new Array<Tarea>();
        this.tareas_a_asignar.forEach(t => this.addTarea(t));

        this.goal = this.calcularGoal(this.compis, this.tareasDisponibles);
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

    addTarea(t: Tarea): void {
        if (t.duracionEstimada <= 0) {
            throw new Error('La tarea debe tener una duración estimada válida');
        } 
        if (t.puntuacion <= 0) {
            throw new Error('La tarea debe tener una puntuación válida');
        }
        this.tareasDisponibles.push(t);
    }

    removeTarea(t: Tarea): void {
        this.tareasDisponibles.filter(tarea => tarea !== t);
    }

    addCompi(c: Compi): void {
        if (c.horasDisponibles < 0) {
            throw new Error('El compañero debe tener unas horas disponibles válidas');
        } 
        this.compis.push(c);
    }

    removeCompi(c: Compi): void {
        this.compis.filter(compi => compi !== c);
    }

    calcularTiempoAsignado(c: Compi, asignaciones: Map<Compi, Tarea[]>): number {
        let tCompi = 0;
        const tareasAsignadas = asignaciones.get(c);

        if (tareasAsignadas) {
            tCompi = tareasAsignadas.map(tarea => tarea.duracionEstimada).reduce((total, t) => total + t, 0);

        }
        return tCompi;
    }

    calcularPuntuacion(c: Compi, asignaciones: Map<Compi,Tarea[]>): number {
        let ptsCompi = 0;
        const tareasAsignadas = asignaciones.get(c);

        if (tareasAsignadas) {
            ptsCompi = tareasAsignadas.map(tarea => tarea.puntuacion).reduce((total, pts) => total + pts, 0);

        }
        return ptsCompi;
    }

};
