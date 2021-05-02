import {Injectable} from '@angular/core';
import {ActiveState, EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {MoviesList} from './movies-list.model';

export interface MoviesListState extends EntityState<MoviesList> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'movies-list', idKey: 'page'})
export class MoviesListStore extends EntityStore<MoviesListState> {

  constructor() {
    super();
  }

}
