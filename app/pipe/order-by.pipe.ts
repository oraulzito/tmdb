import {Pipe, PipeTransform} from '@angular/core';
import {MovieState} from '../state/movie/movie.store';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(values: MovieState[], ...args: unknown[]): unknown {
    return values.slice().sort(((a, b) => {
      return b.vote_average - a.vote_average;
    }));
  }

}
