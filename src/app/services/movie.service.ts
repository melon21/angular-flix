import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { MovieAPIService } from './movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  searchResults: any[] = [];
  myMovieList: any[] = [];
  constructor(private apiService: ApiService,
              private movieAPIsService: MovieAPIService) { }

getSearchResults(): any {
return this.searchResults;
}
getMyMovieList(): any {
return this.myMovieList;
}
async searchForMovies(searchTerm: string) {
 const responce = await this.movieAPIsService.get(searchTerm);
 this.searchResults.length = 0;
 this.searchResults.push(...responce.results);
}
async loadMovieList() {
const results = await this.apiService.get();
this.myMovieList.length = 0;
this.myMovieList.push(...results)
}
async saveToList(movie: any) {
  this.apiService.post(movie);
  this.loadMovieList();
}
}
