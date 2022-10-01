import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';
import { MultipleWinnerComponent } from './multiple-winner.component';

describe('MultipleWinnerComponent', () => {
  let component: MultipleWinnerComponent;
  let fixture: ComponentFixture<MultipleWinnerComponent>;

  beforeEach(() => {
    const filmesServiceStub = () => ({
      getYearsMultipleWinners: () => ({ pipe: () => ({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MultipleWinnerComponent],
      providers: [{ provide: FilmesService, useFactory: filmesServiceStub }]
    });
    fixture = TestBed.createComponent(MultipleWinnerComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'obterDados').and.callThrough();
      component.ngOnInit();
      expect(component.obterDados).toHaveBeenCalled();
    });
  });

  describe('obterDados', () => {
    it('makes expected calls', () => {
      const filmesServiceStub: FilmesService = fixture.debugElement.injector.get(
        FilmesService
      );
      spyOn(filmesServiceStub, 'getYearsMultipleWinners').and.callThrough();
      component.obterDados();
      expect(filmesServiceStub.getYearsMultipleWinners).toHaveBeenCalled();
    });
  });
});
