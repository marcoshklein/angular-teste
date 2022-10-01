import { Year } from './../../models/IYears';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilmesService } from './../../services/filmes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-winner',
  templateUrl: './multiple-winner.component.html',
  styleUrls: ['./multiple-winner.component.scss']
})
export class MultipleWinnerComponent implements OnInit {
  dados$!: Observable<Year[]>;
  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit() {
    this.obterDados();
  }

  obterDados() {
    this.dados$ = this.filmesService.getYearsMultipleWinners().pipe(
      map((res) => res.years)
    );
  }

}
