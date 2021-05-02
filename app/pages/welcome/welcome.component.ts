import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MoviesListService} from '../../state/movies-list/movies-list.service';
import {MovieService} from '../../state/movie/movie.service';
import {MoviesListQuery} from '../../state/movies-list/movies-list.query';
import {MovieSearchService} from '../../state/movie-search/movie-search.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  moviesListLoading$: boolean;

  moviesListSubs: Subscription;

  constructor(
    private moviesListService: MoviesListService,
    private moviesSearchService: MovieSearchService,
    private movieService: MovieService,
    private moviesListQuery: MoviesListQuery,
  ) {
  }

  ngOnInit(): void {
    this.moviesListQuery.selectLoading().subscribe(r => this.moviesListLoading$ = r);
    this.moviesListSubs = this.moviesListService.get().subscribe();
  }

  ngOnDestroy(): void {
    this.moviesListSubs.unsubscribe();
  }

}
