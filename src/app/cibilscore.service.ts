import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CibilScore } from './cibil-score';

@Injectable({
  providedIn: 'root'
})
export class CibilscoreService {

  // Injecting HttpClient service to the constructor
  // same as writing private client: HttpClient
  // and then in the constructor this.client = HttpClient
  constructor(private client: HttpClient) { }

  url = 'http://localhost:3000/scores';

  findAll(): Observable<CibilScore[]> {
    return this.client.get<CibilScore[]>(this.url);
  }

  add(entity: CibilScore): Observable<CibilScore> {
    return this.client.post<CibilScore>(this.url, entity);
  }

  remove(entity: CibilScore): Observable<CibilScore> {
    return this.client.delete<CibilScore>(this.url + '/' + entity.id);
  }
}
