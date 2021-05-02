import {Movie} from '../movie/movie.model';

export interface MoviesList {
  page?: number;
  total_pages?: number;
  total_results?: number;
  results?: Movie[];
}
