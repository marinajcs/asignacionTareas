import { Compi } from './compi';
import { ZonasComunes } from './zonascomunes';

class Horario {
    private readonly idpiso: number;
    private readonly zonas: Array<ZonasComunes>;

    constructor(idpiso: number, zonas: Array<ZonasComunes>){
        this.idpiso = idpiso;
        this.zonas = [];
    }
}
