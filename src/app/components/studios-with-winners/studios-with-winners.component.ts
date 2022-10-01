import { Studio } from './../../models/IStudios';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmesService } from 'src/app/services/filmes.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-studios-with-winners',
  templateUrl: './studios-with-winners.component.html',
  styleUrls: ['./studios-with-winners.component.scss']
})
export class StudiosWithWinnersComponent implements OnInit {

  dados$!: Observable<Studio[]>;
  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit() {
    this.obterTop3Studios();
  }

  obterTop3Studios() {
    this.dados$ = this.filmesService.getTopStudiosWithWinners().pipe(
      map((res) => res.studios.slice(0, 3))
    );
  }
}
