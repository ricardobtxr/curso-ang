import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDb() {
    const heroes: Hero[] = [
      { id: 1, name: 'Dr Nice' },
      { id: 2, name: 'Narco'},
      { id: 3, name: 'Bombasto'},
      { id: 4, name: 'Celeritas'},
      { id: 5, name: 'Magneta'},
      { id: 6, name: 'Windstorm'},
      { id: 7, name: 'Superman'},
    ];

    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 1;
  }

}
