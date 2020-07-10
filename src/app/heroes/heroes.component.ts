import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  filter = '';

  constructor( private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  /*
  onSelect(hero: Hero) {
    this.messageService.add(`HeroesComponent: Selecionado o herói: ${hero.id}`)
    this.selectedHero = hero;
  }
  */

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onAdd(name: string) {
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      if (hero) {
        this.heroes.push(hero);
      }
    });
  }

  delete(hero: Hero) {
    this.heroService.deleteHero(hero).subscribe((response) => {
      if (typeof response !== 'undefined') {
        this.heroes = this.heroes.filter((heroItem) => heroItem !== hero);
      }
    });
  }

  onFilter(term: string) {
    this.filter = term;
  }

}
