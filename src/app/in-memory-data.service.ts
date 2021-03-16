import { Injectable } from '@angular/core';
import { Animal } from './animal/animal.model';
import { Inseminacao } from './inseminacao/inseminacao.model';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDataService {

  createDb() {
    const animais: Animal[] = [
      { id: 1, numero:1, nome: 'Dr Nice' , nascimento: new Date('12/31/2017'),
        inseminacoes: [
          {id: 1, data: new Date('12/31/2017'), confirmado: false },
          {id: 2, data: new Date('12/31/2018'), confirmado: true }]},
      { id: 2, numero:2, nome: 'Narco' , nascimento: new Date('12/20/2016'),
        inseminacoes: [{id: 1, data: new Date('01/10/2018'), confirmado: false }]},
      { id: 3, numero:3, nome: 'Bombasto' , nascimento: new Date('06/10/2017'),
        inseminacoes: [{id: 1, data: new Date('12/20/2019'), confirmado: false }]},
      { id: 4, numero:4, nome: 'Celeritas' , nascimento: new Date('10/12/2018'),
        inseminacoes: [{id: 1, data: new Date('15/14/2020'), confirmado: false }]},
      { id: 5, numero:5, nome: 'Magneta' , nascimento: new Date('10/03/2019'),
        inseminacoes: null},
      { id: 6, numero:6, nome: 'Windstorm' , nascimento: new Date('04/20/2017'),
        inseminacoes: null},
      { id: 7, numero:7, nome: 'Superman' , nascimento: new Date('03/31/2019'),
        inseminacoes: null},
    ];

    return { animais };
  }

  genId(animais: Animal[]): number {
    return animais.length > 0
      ? Math.max(...animais.map((animal) => animal.id)) + 1
      : 1;
  }

}
