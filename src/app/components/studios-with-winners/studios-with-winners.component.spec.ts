import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FilmesService } from 'src/app/services/filmes.service';
import { StudiosWithWinnersComponent } from './studios-with-winners.component';

describe('StudiosWithWinnersComponent', () => {
  let component: StudiosWithWinnersComponent;
  let fixture: ComponentFixture<StudiosWithWinnersComponent>;

  beforeEach(() => {
    const filmesServiceStub = () => ({
      getTopStudiosWithWinners: () => ({ pipe: () => ({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [StudiosWithWinnersComponent],
      providers: [{ provide: FilmesService, useFactory: filmesServiceStub }]
    });
    fixture = TestBed.createComponent(StudiosWithWinnersComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'obterTop3Studios').and.callThrough();
      component.ngOnInit();
      expect(component.obterTop3Studios).toHaveBeenCalled();
    });
  });

  describe('obterTop3Studios', () => {
    it('makes expected calls', () => {
      const filmesServiceStub: FilmesService = fixture.debugElement.injector.get(
        FilmesService
      );
      spyOn(filmesServiceStub, 'getTopStudiosWithWinners').and.callThrough();
      component.obterTop3Studios();
      expect(filmesServiceStub.getTopStudiosWithWinners).toHaveBeenCalled();
    });
  });
});
