import {Component, OnDestroy, OnInit} from '@angular/core';

import {ID} from '@datorama/akita';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {MoviesListStore} from '../../state/movies-list/movies-list.store';
import {MoviesListService} from '../../state/movies-list/movies-list.service';
import {MoviesListQuery} from '../../state/movies-list/movies-list.query';
import {MovieState} from '../../state/movie/movie.store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  moviesList: MovieState[];
  moviesListSub: Subscription;

  constructor(
    private moviesListService: MoviesListService,
    private moviesListQuery: MoviesListQuery,
    private moviesListStore: MoviesListStore,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.moviesListSub = this.moviesListQuery.selectAll().subscribe(r => this.moviesList = r[0].results);
  }

  // tslint:disable-next-line:typedef
  goToDetails(id: ID) {
    return this.router.navigateByUrl('/movie/' + id);
  }

  ngOnDestroy(): void {
    this.moviesListSub.unsubscribe();
  }
}
