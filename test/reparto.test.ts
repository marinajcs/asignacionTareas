import { expect } from 'chai';
import { Reparto, Tarea, crearTarea } from '../lib/reparto';
import { Compi } from '../lib/compi';
import { tareas } from '../data/tareas';

const compis: Compi[] = [
    new Compi(6),
    new Compi(3),
    new Compi(10)
]

const gestorTareas = new Reparto(compis, tareas);
const asignaciones = gestorTareas.asignarTareas();

describe('Validación de los datos', () => {

    it('debería lanzar una excepción si se le pasa un array vacío de compañeros', () => {
        try {
            const gestorTareas = new Reparto([], [tareas[0], tareas[1]]);
            throw new Error('Se esperaba una excepción pero no se lanzó.');
        } catch (error) {
            const typedError = error as Error;
            expect(typedError instanceof Error).to.be.true;
            expect(typedError.message).to.equal('El array de compañeros no puede estar vacío');
        }
    });

    it('debería lanzar una excepción si se crea algún compañero con disponibilidad no válida', () => {
        try {
            const Pablo = new Compi(-5)
            throw new Error('Se esperaba una excepción pero no se lanzó.');
        } catch (error) {
            const typedError = error as Error;
            expect(typedError instanceof Error).to.be.true;
            expect(typedError.message).to.equal('El compañero debe tener unas horas disponibles válidas');
        }
    });

    it('debería lanzar una excepción si se crea alguna tarea con duración no válida', () => {
        try {
            const tarea_invalid: Tarea = crearTarea(0, -3, 10);
            throw new Error('Se esperaba una excepción pero no se lanzó.');
        } catch (error) {
            const typedError = error as Error;
            expect(typedError instanceof Error).to.be.true;
            expect(typedError.message).to.equal('La tarea debe tener una duración estimada válida');
        }
    });

    it('debería lanzar una excepción si se crea alguna tarea con puntuación no válida', () => {
        try {
            const tarea_invalid: Tarea = crearTarea(10, 2, -5);
            throw new Error('Se esperaba una excepción pero no se lanzó.');
        } catch (error) {
            const typedError = error as Error;
            expect(typedError instanceof Error).to.be.true;
            expect(typedError.message).to.equal('La tarea debe tener una puntuación válida');
        }
    });


});

describe('Asignación justa de tareas', () => {

    it('debería asignar tareas a todos los compañeros disponibles', () => {
        function todosConTareasAsignadas(asignaciones: Map<Compi, Tarea[]>): boolean {
            return Array.from(asignaciones.values()).every(tareas => tareas.length > 0);
        };

        const todosTienenTareas = todosConTareasAsignadas(asignaciones);

        expect(todosTienenTareas).to.be.true;
    });

    it('no debería asignar tareas que exceden la disponibilidad horaria', () => {
        function todosConHorasDisponiblesValidas(asignaciones: Map<Compi, Tarea[]>): boolean {
            return Array.from(asignaciones.keys()).every(compi => compi.horasDisponibles >= 0);
        };

        const horasValidasTrasReparto = todosConHorasDisponiblesValidas(asignaciones);

        expect(horasValidasTrasReparto);
    });

    it('todos los compañeros deben cumplir con la meta de puntos semanales', () => {
        function calcularPuntuacionTotal(asignaciones: Map<Compi, Tarea[]>): number {
            return Array.from(asignaciones.values()).reduce((total, tareas) => {
              return total + tareas.reduce((sumaTareas, tarea) => sumaTareas + tarea.puntuacion, 0);
            }, 0);
        };

        const puntuacionTotalCompis = calcularPuntuacionTotal(asignaciones);

        expect(puntuacionTotalCompis).to.be.gte(gestorTareas.goal);

    });

});
