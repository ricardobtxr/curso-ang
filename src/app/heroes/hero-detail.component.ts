import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero.model';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.getHero();
  }

  save() {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

}
