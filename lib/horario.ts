import { Compi } from './compi';
import { ZonasComunes } from './zonascomunes';

class Horario {
    constructor(
        private readonly idpiso: number, 
        private readonly zonas: Array<ZonasComunes>
    ){}
}
