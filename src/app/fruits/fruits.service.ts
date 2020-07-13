import { Injectable } from '@angular/core';
import { Fruits } from './fruits';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  private fruitsUrl = '/assets/api/fruits.json';
  private fruits: Fruits[];

  constructor(private httpClient: HttpClient) {
  }

  // get all fruits
  getFruits(): Observable<Fruits[]> {
    return this.httpClient.get<Fruits[]>(this.fruitsUrl).pipe(
      tap((data) => {
        console.log(data);
      }),
      catchError(this.handleError)
    );
  }

  // get fruit detials
  getFruitDetails(id: number): Observable<Fruits> {
    return this.getFruits().pipe(
      map((fruits: Fruits[]) => fruits.find(f => f.id === id)),
      catchError(this.handleError)
    );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}

