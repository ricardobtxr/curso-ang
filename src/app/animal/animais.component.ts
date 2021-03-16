import { Component, OnInit } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalService } from './animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
})

export class AnimaisComponent implements OnInit {

  animais: Animal[];
  selectedAnimal: Animal;
  filter = '';

  constructor(
    private router: Router,
    private animalService: AnimalService
  ) {}


  ngOnInit(): void {
    this.getAnimais();
  }

  getAnimais(): void {
    this.animalService.getAnimais().subscribe((animais) => (this.animais = animais));
  }

  delete(animal: Animal) {
    this.animalService.deleteAnimal(animal).subscribe((response) => {
      if (typeof response !== 'undefined') {
        this.animais = this.animais.filter((animalItem) => animalItem !== animal);
      }
    });
  }

  onFilter(term: string) {
    this.filter = term;
  }

  onAdd() {
    this.router.navigate(['/novoAnimal']);
  }

}
