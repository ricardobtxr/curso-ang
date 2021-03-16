import { Inseminacao } from '../inseminacao/inseminacao.model';

export interface Animal {
  id: number;
  numero: number;
  nome: string;
  nascimento: Date;
  inseminacoes: Inseminacao[];
}
