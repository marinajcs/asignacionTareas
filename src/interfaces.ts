//Interfaz que representa un intervalo de tiempo
export interface IntervaloHorario {
     fechaInicio : Date;
     fechaFin : Date;
}

//Interfaz que representa una tarea
export interface Tareas {
     tarea: string;
     duracionEstimada: number;
     realizada: boolean;
 }
 