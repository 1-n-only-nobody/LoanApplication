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

  url = 'http://localhost:3001/scores';

  findAll(): Observable<CibilScore[]> {

    return this.client.get<CibilScore[]>(this.url);
  }
}
