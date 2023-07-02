import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { GenreViewComponent } from '../genre-view/genre-view.component';
import { DirectorViewComponent } from '../director-view/director-view.component';
import { MovieViewComponent } from '../movie-view/movie-view.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  movies: any[] = [];
  constructor(
    public fetchApiData: UserRegistrationService,
    public dialog: MatDialog
  ) {}

  //void means that we can expect no return value
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  openGenreDialog(genre: string): void {
    this.dialog.open(GenreViewComponent, {
      data: {
        genre,
      },
      width: '280px',
    });
  }

  openDirectorDialog(director: string): void {
    this.dialog.open(DirectorViewComponent, {
      data: {
        director,
      },
      width: '280px',
    });
  }

  openSynopsisDialog(description: string): void {
    this.dialog.open(MovieViewComponent, {
      data: {
        description,
      },
      width: '280px',
    });
  }
}
