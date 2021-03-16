import { Injectable } from '@angular/core';
import { Animal } from './animal/animal.model';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDataService {

  createDb() {
    const animais: Animal[] = [
      { id: 1, numero:1, nome: 'Dr Nice' , nascimento: new Date('12/31/2017')},
      { id: 2, numero:2, nome: 'Narco' , nascimento: new Date('12/20/2016')},
      { id: 3, numero:3, nome: 'Bombasto' , nascimento: new Date('06/10/2017')},
      { id: 4, numero:4, nome: 'Celeritas' , nascimento: new Date('10/12/2018')},
      { id: 5, numero:5, nome: 'Magneta' , nascimento: new Date('10/03/2019')},
      { id: 6, numero:6, nome: 'Windstorm' , nascimento: new Date('04/20/2017')},
      { id: 7, numero:7, nome: 'Superman' , nascimento: new Date('03/31/2019')},
    ];

    return { animais };
  }

  genId(animais: Animal[]): number {
    return animais.length > 0
      ? Math.max(...animais.map((animal) => animal.id)) + 1
      : 1;
  }

}
