import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ListaFilmesComponent } from './lista-filmes.component';

describe('ListaFilmesComponent', () => {
  let component: ListaFilmesComponent;
  let fixture: ComponentFixture<ListaFilmesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ListaFilmesComponent]
    });
    fixture = TestBed.createComponent(ListaFilmesComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
