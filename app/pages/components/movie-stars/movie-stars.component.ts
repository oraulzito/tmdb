import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-stars',
  templateUrl: './movie-stars.component.html',
  styleUrls: ['./movie-stars.component.css']
})
export class MovieStarsComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  @Input() voteAverage: number;
  voteInt: number;

  constructor() {
  }

  ngOnInit(): void {
    this.voteInt = Math.trunc(this.voteAverage);
  }

}
