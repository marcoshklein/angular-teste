import { IInterval } from './../../models/IIntervalProducers';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-max-min-interval-producers',
  templateUrl: './max-min-interval-producers.component.html',
  styleUrls: ['./max-min-interval-producers.component.scss']
})
export class MaxMinIntervalProducersComponent implements OnInit {

  dados$!: Observable<IInterval>;
  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit() {
    this.obterMaxMinInterval();
  }

  obterMaxMinInterval() {
    this.dados$ = this.filmesService.getMaxMinIntervalProducers();
  }
}
