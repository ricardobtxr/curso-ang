import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
})
export class HeroAddComponent {

  heroName = '';

  @Output() add = new EventEmitter<string>();

  onAdd() {
    this.add.emit(this.heroName);
    this.heroName = '';
  }

}
