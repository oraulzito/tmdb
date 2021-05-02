import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {MovieSearchStore} from './movie-search.store';
import {MoviesList} from '../movies-list/movies-list.model';

@Injectable({providedIn: 'root'})
export class MovieSearchService {

  constructor(private movieSearchStore: MovieSearchStore, private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  search(query: string) {
    this.movieSearchStore.setLoading(true);
    // tslint:disable-next-line:max-line-length
    return this.http.get<MoviesList>('https://api.themoviedb.org/3/search/movie?api_key=7326230d56741f37d9159d452da2d8d9&language=pt-BR&query=' + query).pipe
    (tap(entity => {
      this.movieSearchStore.set([entity]);
      this.movieSearchStore.setLoading(false);
    }));
  }

}
