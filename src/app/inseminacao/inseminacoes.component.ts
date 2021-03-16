import { Component, OnInit, Input } from '@angular/core';
import { Inseminacao } from './inseminacao.model';

@Component({
  selector: 'app-inseminacoes',
  templateUrl: './inseminacoes.component.html',
})
export class InseminacoesComponent implements OnInit {

  @Input() inseminacoes: Inseminacao[];

  constructor() { }

  ngOnInit(): void {
  }

  delete(inseminacao: Inseminacao): void {
  }

  onAdd(): void {
  }
}
