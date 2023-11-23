import { expect } from 'chai';
import { Reparto, Tarea } from '../lib/reparto';
import { Compi } from '../lib/compi';

describe('Asignación justa de tareas', () => {
    const Rebeca = new Compi(6);
    const Laura = new Compi(3);
    const Fernando = new Compi(10);

    const tarea1: Tarea = {
        duracionEstimada: 3,
        puntuacion: 10,
    };
    const tarea2: Tarea = {
        duracionEstimada: 4,
        puntuacion: 7,
    };
    const tarea3: Tarea = {
        duracionEstimada: 1,
        puntuacion: 3,
    };
    const tarea4: Tarea = {
        duracionEstimada: 3,
        puntuacion: 2,
    };
    const tarea5: Tarea = {
        duracionEstimada: 7,
        puntuacion: 7,
    };

    it('debería lanzar una excepción si se le pasa un array vacío de compañeros', () => {
        const compis_empty: Compi[] = [];
        const gestorTareas = new Reparto(compis_empty, [tarea1, tarea2]);

        try {
            gestorTareas.asignarTareas();
            throw new Error('Se esperaba una excepción pero no se lanzó.');
        } catch (error) {
            expect(error instanceof Error).to.be.true;
            expect(error).to.equal('El array de compañeros no puede estar vacío.');
        }
    });

    it('debería asignar tareas a compañeros disponibles', () => {
        const gestorTareas = new Reparto([Rebeca, Laura], [tarea1, tarea2]);
        const asignaciones = gestorTareas.asignarTareas();

        expect(asignaciones.get(Rebeca)).to.include(tarea2);
        expect(asignaciones.get(Laura)).to.include(tarea1);
    });

    it('no debería asignar tareas que exceden la disponibilidad horaria', () => {
        const gestorTareas = new Reparto([Rebeca, Laura], [tarea1, tarea2, tarea5]);
        const asignaciones = gestorTareas.asignarTareas();

        expect(asignaciones.get(Rebeca)).to.not.include(tarea5);
        expect(asignaciones.get(Laura)).to.not.include(tarea5);
    });

    it('los compañeros deben cumplir con la meta de puntos semanales', () => {
        const gestorTareas = new Reparto([Rebeca, Laura, Fernando], [tarea1, tarea2, tarea3, tarea4, tarea5]);
        const asignaciones = gestorTareas.asignarTareas();
        const goal = gestorTareas.getGoal();

        expect(gestorTareas.calcularPuntuacion(Rebeca, asignaciones)).to.be.gte(goal);
        expect(gestorTareas.calcularPuntuacion(Laura, asignaciones)).to.be.gte(goal);
    });
});
