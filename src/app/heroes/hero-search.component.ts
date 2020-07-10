import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html'
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>; // Convenção utilizar o $ no final de variáveis do tipo Observable
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),        // Aguardar digitação
      distinctUntilChanged(),   // Não faz nova busca se não mudar o termpo
      // Buscar no backend
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }

  onSearch(term: string) {
    this.searchTerms.next(term);
  }

}
