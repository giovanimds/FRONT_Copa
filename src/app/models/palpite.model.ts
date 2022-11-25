import {Jogo} from "./jogo.model";

export interface Palpite {
    id?: number;
    golA: number;
    golB: number;
    jogo: Jogo;
}