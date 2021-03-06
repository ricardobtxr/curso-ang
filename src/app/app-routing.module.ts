import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnimaisComponent } from './animal/animais.component';
import { AnimalDetailComponent } from './animal/animal-detail.component';
import { AnimalAddComponent} from './animal/animal-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/animais', pathMatch: 'full' },
  { path: 'animais/:id', component: AnimalDetailComponent },
  { path: 'animais', component: AnimaisComponent },
  { path: 'novoAnimal', component: AnimalAddComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
