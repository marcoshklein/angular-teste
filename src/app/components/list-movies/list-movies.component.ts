import { IMovies } from './../../models/IMovies';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmesService } from 'src/app/services/filmes.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {
  year: number | undefined = undefined;
  winner: boolean | undefined = undefined;
  page = 0;
  maxPage = 1;

  dados$!: Observable<IMovies>;
  constructor(private filmesService: FilmesService) {}

  ngOnInit() {
    this.obterFilmes();
  }

  obterFilmes() {
    const currentYear = new Date().getFullYear();

    this.dados$ = this.filmesService
      .getMovies(this.page, this.year, this.winner)
      .pipe(tap((res) => (this.maxPage = res.totalPages)));
  }

  previous() {
    if (this.page > 0) {
      this.page--;
      this.obterFilmes();
    }
  }

  next() {
    if (this.page < this.maxPage - 1) {
      this.page++;
      this.obterFilmes();
    }
  }
}
