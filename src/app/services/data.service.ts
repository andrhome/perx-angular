import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<any> {
    return this.http.get('/assets/data/books.json').pipe(
      map(
        res => {
          return res['data'];
        },
        err => console.log(err))
    );
  }
}
