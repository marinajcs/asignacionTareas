import { Compi } from './Compi';
import { ZonasComunes } from './ZonasComunes';

//El horario es también la representación del piso
class Horario {
    private readonly idpiso: number;
    private readonly zonas: Array<ZonasComunes>; // Una vez se crea el piso, no se pueden añadir más zonas comunes

    constructor(idpiso: number, zonas: Array<ZonasComunes>){
        this.idpiso = idpiso;
        this.zonas = [];
    }
}
