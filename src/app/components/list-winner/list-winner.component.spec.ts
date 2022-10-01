import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FilmesService } from 'src/app/services/filmes.service';
import { FormsModule } from '@angular/forms';
import { ListWinnerComponent } from './list-winner.component';

describe('ListWinnerComponent', () => {
  let component: ListWinnerComponent;
  let fixture: ComponentFixture<ListWinnerComponent>;

  beforeEach(() => {
    const filmesServiceStub = () => ({ getMovieWinnerByYear: (ano: any) => ({}) });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ListWinnerComponent],
      providers: [{ provide: FilmesService, useFactory: filmesServiceStub }]
    });
    fixture = TestBed.createComponent(ListWinnerComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('obterFilmesVencedoresPorAno', () => {
    it('makes expected calls', () => {
      const filmesServiceStub: FilmesService = fixture.debugElement.injector.get(
        FilmesService
      );
      spyOn(filmesServiceStub, 'getMovieWinnerByYear').and.callThrough();
      component.obterFilmesVencedoresPorAno();
      expect(filmesServiceStub.getMovieWinnerByYear).toHaveBeenCalled();
    });
  });
});
