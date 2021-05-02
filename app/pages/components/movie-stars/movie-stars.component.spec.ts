import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStarsComponent } from './movie-stars.component';

describe('MovieStarsComponent', () => {
  let component: MovieStarsComponent;
  let fixture: ComponentFixture<MovieStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
