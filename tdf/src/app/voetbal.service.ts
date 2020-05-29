import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class VoetbalService {

  POSTurl='https://localhost:44308/api/players';

  JSONitems = [];

  constructor(private http: HttpClient) {}

  GETplayers(): Observable<any> {
    return this.http.get('https://localhost:44308/api/players/all');
  }

  GETplayersByParam(par: string, value: string): Observable<any> {
    let param1 = new HttpParams().set(par, value);
    return this.http.get('https://localhost:44308/api/players', {params: param1});
  }

  GETplayerById(id: string): Observable<any>{
    return this.http.get('https://localhost:44308/api/players/' + id);
  }

  VoetbalPOST(player: Player): Observable<any>{
    return this.http.post<any>(this.POSTurl, player);
  }

  VoetbalPUT(player: Player, id: string): Observable<any>{
    return this.http.put<any>('https://localhost:44308/api/players/' + id, player);
  }

  VoetbalDELETE(id: string): Observable<any>{
    return this.http.delete<any>('https://localhost:44308/api/players/' + id);
  }

  //VoetbalDELETE(id: string, auth_token): Observable<any> {
  //  const headers = new Headers({
  //    'Content-Type': 'application/json',
  //    'Authorization': auth_token
  //  })
  //  return this.http.delete('https://localhost:44308/api/players/' + id, { headers: headers })
  //} 
}
