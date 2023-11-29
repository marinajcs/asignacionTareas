import { Compi } from './compi';

export type Tarea = {
    id: number;
    duracionEstimada: number;
    puntuacion: number;
};

export function crearTarea(id: number, duracionEstimada: number, puntuacion: number): Tarea {
    if (duracionEstimada > 0 && puntuacion > 0) {
        return { id, duracionEstimada, puntuacion };
    } else if (duracionEstimada <= 0){
        throw new Error('La tarea debe tener una duración estimada válida');
    } else {
        throw new Error('La tarea debe tener una puntuación válida');
    }
}

export class Reparto {
    public goal: number;
    private _tareasDisponibles: Array<Tarea>;
    private _compis: Array<Compi>;

    constructor(readonly compis_a_asignar: Array<Compi>, readonly tareas_a_asignar: Array<Tarea>) {
        if (compis_a_asignar.length === 0) {
            throw new Error('El array de compañeros no puede estar vacío');
        }
        this._compis = compis_a_asignar;
        this._tareasDisponibles = tareas_a_asignar;
        this.goal = this.calcularGoal(this._compis, this._tareasDisponibles);
    }

    calcularGoal(compis:Array<Compi>, tareasDisponibles:Array<Tarea>): number{
        const totalPts = tareasDisponibles.map(tarea => tarea.puntuacion).reduce((total, pts) => total + pts, 0);
        return totalPts/compis.length;
    }

    asignarTareas(): Map<Compi,Tarea[]> {
        let asignaciones = new Map<Compi, Tarea[]>();
        this._compis.forEach(compi => asignaciones.set(compi, []));

        let compisOrdenados = this._compis.sort((a,b) => a.horasDisponibles - b.horasDisponibles);
        const tareasOrdenadas = this._tareasDisponibles.sort((a,b) => b.puntuacion - a.puntuacion);

        tareasOrdenadas.forEach(tarea => {
            const compisDisponibles = compisOrdenados.filter(compi => {
                return tarea.duracionEstimada <= compi.horasDisponibles;
            }).filter(compi => {
                const ptsAsignados = this.calcularPuntuacion(compi, asignaciones);
                return ptsAsignados < this.goal;
            });

            if (compisDisponibles.length > 0) {
                let compiAsignado = compisDisponibles[0];
                asignaciones.get(compiAsignado)!.push(tarea);
                compiAsignado.horasDisponibles -= tarea.duracionEstimada;
                compisOrdenados = this._compis.sort((a,b) => a.horasDisponibles - b.horasDisponibles);
            }
        });

        this._compis.forEach(compi => {
            const ptsAsignados = this.calcularPuntuacion(compi, asignaciones);
            if (ptsAsignados < this.goal) {
                this.goal = ptsAsignados;
            }
        });

        return asignaciones;
    }

    addTarea(t: Tarea): void {
        this._tareasDisponibles.push(t);
    }

    removeTarea(idT: number): void {
        this._tareasDisponibles = this._tareasDisponibles.filter(tarea => tarea.id !== idT);
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
