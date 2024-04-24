import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from 'src/Modeles/Evt';

@Injectable({
  providedIn: 'root'
})
export class EventService{

  constructor(private httpClient: HttpClient) { }
  GETALL(): Observable<Evenement[]> {
    return this.httpClient.get<Evenement[]>('http://localhost:3000/events');
  }
  save(data:Evenement):Observable<void>{
    return this.httpClient.post<void>('http://localhost:3000/events', data)
  }
}
