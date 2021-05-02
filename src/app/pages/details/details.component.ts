import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../../state/movie/movie.service';
import {MovieQuery} from '../../state/movie/movie.query';
import {Subscription} from 'rxjs';
import {MovieState} from '../../state/movie/movie.store';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  movie: MovieState;
  movieSub: Subscription;

  constructor(
    private movieService: MovieService,
    private movieQuery: MovieQuery,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((val) => {
      this.initMovie();
    });
  }

  ngOnInit(): void {
    this.initMovie();
  }

  ngOnDestroy(): void {
    this.movieSub.unsubscribe();
  }

  // tslint:disable-next-line:typedef
  initMovie() {
    const id = this.activatedRoute.snapshot.params.id;
    this.movieSub = this.movieService.get(id).subscribe(
      () => this.movie = this.movieQuery.getActive(),
      (err) => this.router.navigateByUrl('/notfound'),
    );
  }
}
