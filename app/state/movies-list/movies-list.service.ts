import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {MoviesListStore} from './movies-list.store';
import {MoviesList} from './movies-list.model';
import {Movie} from '../movie/movie.model';

@Injectable({providedIn: 'root'})
export class MoviesListService {

  constructor(private moviesListStore: MoviesListStore, private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  get(timeWindow = 'week') {
    // tslint:disable-next-line:max-line-length
    this.moviesListStore.setLoading(true);
    return this.http.get<MoviesList>('https://api.themoviedb.org/3/trending/movie/' + timeWindow + '?api_key=7326230d56741f37d9159d452da2d8d9').pipe(
      tap(entity => {
        this.moviesListStore.setLoading(false);
        this.moviesListStore.set([entity]);
        this.moviesListStore.setActive(entity.page);
      })
    );
  }
}
