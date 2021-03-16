import { Component, ViewChild  } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalService } from './animal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
})
export class AnimalAddComponent {

  animal: Animal = {id: null, nascimento: null, nome: '', numero: null};

  constructor(
    private location: Location,
    private animalService: AnimalService
  ) {}

  onAdd() {
    this.animalService.addAnimal(this.animal).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }

}
