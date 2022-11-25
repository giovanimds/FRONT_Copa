import { Selecao } from "./selecao.model";

export interface Jogo {
  id?: number;
  selecaoA: Selecao;
  selecaoB: Selecao;
  golA: number;
  golB: number;
  criadoEm?: string;
}
