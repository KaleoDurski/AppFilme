import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum TiposDeBusca{
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private url = 'http://www.omdbapi.com';
  private apiKey = 'a4924030';

  constructor(private http: HttpClient) { }

  buscarFilmes(titulo: string, type: TiposDeBusca) : Observable<any>{
    return this.http.get(`${this.url}?s=${encodeURI(titulo)}&type=${type}&apiKey=${this.apiKey}`);
  }

  buscarDetalhado (id: string){
    return this.http.get(`${this.url}?i=${id}$plot=full&apikey=${this.apiKey}`);
  }
}
