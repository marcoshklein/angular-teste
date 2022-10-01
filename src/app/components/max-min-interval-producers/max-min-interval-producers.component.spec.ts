import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FilmesService } from 'src/app/services/filmes.service';
import { MaxMinIntervalProducersComponent } from './max-min-interval-producers.component';

describe('MaxMinIntervalProducersComponent', () => {
  let component: MaxMinIntervalProducersComponent;
  let fixture: ComponentFixture<MaxMinIntervalProducersComponent>;

  beforeEach(() => {
    const filmesServiceStub = () => ({
      getMaxMinIntervalProducers: () => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MaxMinIntervalProducersComponent],
      providers: [{ provide: FilmesService, useFactory: filmesServiceStub }]
    });
    fixture = TestBed.createComponent(MaxMinIntervalProducersComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'obterMaxMinInterval').and.callThrough();
      component.ngOnInit();
      expect(component.obterMaxMinInterval).toHaveBeenCalled();
    });
  });

  describe('obterMaxMinInterval', () => {
    it('makes expected calls', () => {
      const filmesServiceStub: FilmesService = fixture.debugElement.injector.get(
        FilmesService
      );
      spyOn(filmesServiceStub, 'getMaxMinIntervalProducers').and.callThrough();
      component.obterMaxMinInterval();
      expect(filmesServiceStub.getMaxMinIntervalProducers).toHaveBeenCalled();
    });
  });
});
