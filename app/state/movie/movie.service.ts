import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Movie } from './movie.model';
import { MovieStore } from './movie.store';

@Injectable({ providedIn: 'root' })
export class MovieService {

  constructor(private movieStore: MovieStore, private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  get(id: ID) {
    this.movieStore.setLoading(true);
    // tslint:disable-next-line:max-line-length
    return this.http.get<Movie>('https://api.themoviedb.org/3/movie/' + id + '?api_key=7326230d56741f37d9159d452da2d8d9&language=pt-BR').pipe
    (tap(entity => {
      this.movieStore.set([entity]);
      this.movieStore.setActive(id);
      this.movieStore.setLoading(false);
    }));
  }
}
