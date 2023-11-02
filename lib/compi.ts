type IntervaloHorario = {
    fechaInicio : Date;
    fechaFin : Date;
}

export class Compi {
    constructor(
        readonly id: number,
        horarioNoDisponible: Array<IntervaloHorario>
    ){}

}