import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {MoviesList} from '../movies-list/movies-list.model';

export interface MovieSearchState extends EntityState<MoviesList> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'movie-search', idKey: 'page'})
export class MovieSearchStore extends EntityStore<MovieSearchState> {

  constructor() {
    super();
  }

}
