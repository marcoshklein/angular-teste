import { IWinner } from './../../models/IWinner';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-list-winner',
  templateUrl: './list-winner.component.html',
  styleUrls: ['./list-winner.component.scss']
})
export class ListWinnerComponent implements OnInit {

  ano!: number;
  dados$!: Observable<IWinner[]>;
  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit() {
  }

  obterFilmesVencedoresPorAno() {

    const currentYear = new Date().getFullYear();

    if ((this.ano < 1980) || (this.ano > currentYear)) {
      alert('Informe um ano entre 1980 e ' + currentYear);
      return;
    }

    this.dados$ = this.filmesService.getMovieWinnerByYear(this.ano);
  }

}
