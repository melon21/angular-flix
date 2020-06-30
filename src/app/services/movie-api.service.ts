import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {
readonly MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
readonly API_KEY = '036f9b44e1f85c56002535c3b8098aff';
  constructor(private httpClient: HttpClient) { }
  get(query: string): any {
    return this.httpClient.get<any>(`${this.MOVIE_URL}/?api_key=${this.API_KEY}&query=${query}`).toPromise();
  }
}
