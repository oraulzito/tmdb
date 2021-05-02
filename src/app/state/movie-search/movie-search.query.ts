import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MovieSearchStore, MovieSearchState } from './movie-search.store';

@Injectable({ providedIn: 'root' })
export class MovieSearchQuery extends QueryEntity<MovieSearchState> {

  constructor(protected store: MovieSearchStore) {
    super(store);
  }

}
