import {ID} from '@datorama/akita';

export interface Movie {
  id?: ID;
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  belongs_to_collection?: null | [];
  popularity?: number;
  budget?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
  genres?: [
    {
      id?: number;
      name?: string;
    }
  ];
  production_companies?: [
    {
      id?: ID;
      name?: string;
      logo_path?: string | null;
      origin_country?: string;
    }
  ];
  production_countries?: [
    {
      ido_3166_1?: string;
      name?: string;
    }
  ];
  revenue?: number;
  runtime?: number;
  spoken_languages?: [
    {
      iso_639_1?: string;
      name?: string;
    }
  ];
  status?: string;
  homepage?: string | null;
  imdb_id?: ID | null;
  tagline?: string| null;
}
