import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {MoviesListState, MoviesListStore} from './movies-list.store';

@Injectable({providedIn: 'root'})
export class MoviesListQuery extends QueryEntity<MoviesListState> {

  constructor(protected store: MoviesListStore) {
    super(store);
  }

}
