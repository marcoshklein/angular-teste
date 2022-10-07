import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FilmesService } from 'src/app/services/filmes.service';
import { FormsModule } from '@angular/forms';
import { ListMoviesComponent } from './list-movies.component';

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;

  beforeEach(() => {
    const filmesServiceStub = () => ({
      getMovies: (page = 1, year =2010, winner = true) => ({ subscribe: (f: any) => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ListMoviesComponent],
      providers: [{ provide: FilmesService, useFactory: filmesServiceStub }]
    });
    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'obterFilmes').and.callThrough();
      component.ngOnInit();
      expect(component.obterFilmes).toHaveBeenCalled();
    });
  });

  describe('obterFilmes', () => {
    it('makes expected calls', () => {
      const filmesServiceStub: FilmesService = fixture.debugElement.injector.get(
        FilmesService
      );
      spyOn(filmesServiceStub, 'getMovies').and.callThrough();
      component.obterFilmes();
      expect(filmesServiceStub.getMovies).toHaveBeenCalled();
    });
  });

  describe('previous', () => {
    it('makes expected calls', () => {
      spyOn(component, 'obterFilmes').and.callThrough();
      component.previous();
      expect(component.obterFilmes).toHaveBeenCalled();
    });
  });
});
