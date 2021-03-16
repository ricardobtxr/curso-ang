import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SearchInputComponent } from './search-input/search-input.component';
import { environment } from '../environments/environment';
import { AnimaisComponent } from './animal/animais.component';
import { AnimalDetailComponent } from './animal/animal-detail.component';
import { AnimalAddComponent } from './animal/animal-add.component';
import { AnimalFilterPipe } from './animal/animal-filter.pipe';
import { AnimalSearchComponent } from './animal/animal-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NavbarComponent,
    SearchInputComponent,
    AnimaisComponent,
    AnimalDetailComponent,
    AnimalAddComponent,
    AnimalFilterPipe,
    AnimalSearchComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, NgbCollapseModule, HttpClientModule, NgbModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          delay: 200,
        }),
  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
