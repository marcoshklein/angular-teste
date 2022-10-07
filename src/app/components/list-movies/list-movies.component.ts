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
  page = 1;
  maxPage = 1;
  totalItens: number;
  itensPerPage = 15;
  collection: any;

  dados$!: Observable<IMovies>;
  constructor(private filmesService: FilmesService) {}

  ngOnInit() {
    this.obterFilmes();
  }

  obterFilmes() {

    this.filmesService
      .getMovies(this.page -1, this.year, this.winner)
      .subscribe(res => {
        console.log(res);
        this.totalItens = res.totalElements;
        this.collection = res;
      });
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
    }
  }

  pageChanged(e: any) {
    console.log(e);
    this.obterFilmes();
  }

  counter(): Array<number> {
    let paginas = new Array();
    for (let index = 1; index <= 5; index++) {
      if (this.page + index < this.maxPage) {
        paginas.push(this.page + index);
      }
    }
    return paginas;
  }
}
