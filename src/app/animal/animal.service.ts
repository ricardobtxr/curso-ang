import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from '../messages/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private heroesUrl = `${environment.baseUrl}/animais`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    }),
  };


  // GET /animais
  getAnimais(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.heroesUrl, this.httpOptions).pipe(
      tap(() => this.log('fetched animais')),
      catchError(this.handleError<Animal[]>('getAnimais', []))
    );
  }

  // GET /animais/id
  getAnimal(id: number): Observable<Animal> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.get<Animal>(url, this.httpOptions).pipe(
      tap(() => this.log(`fetched animal id=${id}`)),
      catchError(this.handleError<Animal>('getAnimais'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`AnimalService: ${message}`);
  }

  // PUT /animais/id
  updateAnimal(animal: Animal) {
    const url = `${this.heroesUrl}/${animal.id}`;

    return this.http.put<Animal>(url, animal, this.httpOptions).pipe(
      tap(() => this.log(`updated animal id=${animal.id}`)),
      catchError(this.handleError<Animal>('updateAnimal'))
    );
  }

  // POST /animais
  addAnimal(animal: Animal): Observable<Animal> {
    return this.http.post(this.heroesUrl, animal, this.httpOptions).pipe(
      tap((newAnimal: Animal) => this.log(`added animal with id=${newAnimal.id}`)),
      catchError(this.handleError<Animal>('addAnimal'))
    );
  }

  // DELETE /animais/id
  deleteAnimal(animal: Animal): Observable<any> {
    const url = `${this.heroesUrl}/${animal.id}`;

    return this.http.delete<any>(url, this.httpOptions).pipe(
      tap(() => this.log(`deleted animal id=${animal.id}`)),
      catchError(this.handleError<Animal>('deleteAnimal'))
    );
  }

  // GET /animais/?name=term
  searchAnimais(term: string): Observable<Animal[]> {
    if (!(term && term.trim())) {
      return of([]);
    }

    return this.http.get<Animal[]>(`${this.heroesUrl}/?name=${term}`, this.httpOptions).pipe(
      tap((animais) => {
        if (animais && animais.length) {
          this.log(`obtidos ${animais.length} animais`);
        } else {
          this.log('não encontrados animais');
        }
      }),
      catchError(this.handleError<Animal[]>('getAnimais', []))
    );
  }

}
