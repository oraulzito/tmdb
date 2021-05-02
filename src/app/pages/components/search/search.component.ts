import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieSearchQuery} from '../../../state/movie-search/movie-search.query';
import {ID} from '@datorama/akita';
import {Router} from '@angular/router';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {MovieSearchService} from '../../../state/movie-search/movie-search.service';
import {MovieSearchState} from '../../../state/movie-search/movie-search.store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  loadingResults$: boolean;
  showResults: boolean;

  moviesSearchSub: Subscription;
  searchForm: FormGroup;
  resultSearch: MovieSearchState;

  constructor(
    private moviesSearchService: MovieSearchService,
    private movieSearchQuery: MovieSearchQuery,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.movieSearchQuery.selectLoading().subscribe(r => this.loadingResults$ = r);
    this.showResults = false;

    this.searchForm = new FormGroup({
      searchInput: new FormControl('', Validators.required),
    });

    this.onChanges();
  }

  onChanges(): void {
    this.searchForm.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(val => {
      if (this.searchForm.value.searchInput !== '') {
        this.moviesSearchService.search(this.searchForm.value.searchInput).subscribe(
          () => this.moviesSearchSub = this.movieSearchQuery.selectAll().subscribe(r => this.resultSearch = r[0].results)
        );
      }
    });
  }

  // tslint:disable-next-line:typedef
  showResultsModal() {
    setTimeout(() => {
      this.showResults = !this.showResults;
    }, 2000);
  }


  // tslint:disable-next-line:typedef
  goToDetails(id: ID) {
    this.showResultsModal();
    this.searchForm.reset();
    return this.router.navigateByUrl('/movie/' + id);
  }

  ngOnDestroy(): void {
    this.moviesSearchSub.unsubscribe();
  }
}
