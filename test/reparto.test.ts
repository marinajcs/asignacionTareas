import { expect } from 'chai';
import { Reparto, Tarea } from '../lib/reparto';
import { Compi } from '../lib/compi';
import { tareas } from '../data/tareas';

const compis: Compi[] = [
    new Compi(6),
    new Compi(3),
    new Compi(10)
]
const [Rebeca, Laura, Fernando] = compis;
const [tarea1, tarea2, tarea3, tarea4, tarea5, tarea6, tarea7]: Tarea[] = tareas;

describe('Validación de los datos', () => {

    it('debería lanzar una excepción si se le pasa un array vacío de compañeros', () => {
        const compis_empty: Compi[] = [];

        try {
            const gestorTareas = new Reparto(compis_empty, [tarea1, tarea2]);
            throw new Error('Se esperaba una excepción pero no se lanzó.');
        } catch (error) {
            const typedError = error as Error;
            expect(typedError instanceof Error).to.be.true;
            expect(typedError.message).to.equal('El array de compañeros no puede estar vacío');
        }
    });

    it('debería lanzar una excepción si se crea algún compañero con disponibilidad no válida', () => {
        ;

        try {
            const Pablo = new Compi(-5)
            const gestorTareas = new Reparto([Rebeca, Pablo], [tarea1, tarea2]);
            throw new Error('Se esperaba una excepción pero no se lanzó.');
        } catch (error) {
            const typedError = error as Error;
            expect(typedError instanceof Error).to.be.true;
            expect(typedError.message).to.equal('El compañero debe tener unas horas disponibles válidas');
        }
    });

    it('debería lanzar una excepción si se le pasa alguna tarea con duración no válida', () => {
        const tarea_invalid: Tarea = {
            duracionEstimada: -3,
            puntuacion: 10,
        };

        try {
            const gestorTareas = new Reparto([Rebeca, Laura], [tarea1, tarea_invalid]);
            throw new Error('Se esperaba una excepción pero no se lanzó.');
        } catch (error) {
            const typedError = error as Error;
            expect(typedError instanceof Error).to.be.true;
            expect(typedError.message).to.equal('La tarea debe tener una duración estimada válida');
        }
    });

    it('debería lanzar una excepción si se le pasa alguna tarea con puntuación no válida', () => {
        const tarea_invalid: Tarea = {
            duracionEstimada: 2,
            puntuacion: -5,
        };

        try {
            const gestorTareas = new Reparto([Rebeca, Laura], [tarea1, tarea_invalid]);
            throw new Error('Se esperaba una excepción pero no se lanzó.');
        } catch (error) {
            const typedError = error as Error;
            expect(typedError instanceof Error).to.be.true;
            expect(typedError.message).to.equal('La tarea debe tener una puntuación válida');
        }
    });


});

describe('Asignación justa de tareas', () => {

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
        const goal = gestorTareas.goal;

        expect(gestorTareas.calcularPuntuacion(Rebeca, asignaciones)).to.be.gte(goal);
        expect(gestorTareas.calcularPuntuacion(Laura, asignaciones)).to.be.gte(goal);
        expect(gestorTareas.calcularPuntuacion(Fernando, asignaciones)).to.be.gte(goal);

    });

});
