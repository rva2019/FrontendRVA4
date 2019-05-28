import { Artikl } from './artikl';
import { Porudzbina } from './porudzbina';

export class StavkaPorudzbine{
    id: number;
    redniBroj: number;
    kolicina: number;
    jedinicaMere: string;
    cena: number;
    artiklBean: Artikl;
    porudzbinaBean: Porudzbina;
}