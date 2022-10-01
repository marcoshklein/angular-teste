import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { FilmesService } from './filmes.service';
import * as Mocks from './mocks';



describe('FilmesService', () => {
  let service: FilmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FilmesService]
    });
    service = TestBed.inject(FilmesService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getYearsMultipleWinners', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getYearsMultipleWinners().subscribe(res => {
        expect(res).toEqual(Mocks.mockgetYearsMultipleWinners);
      });
      const req = httpTestingController.expectOne('https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners');
      expect(req.request.method).toEqual('GET');
      req.flush(Mocks.mockgetYearsMultipleWinners);
      httpTestingController.verify();
    });
  });

  describe('getTopStudiosWithWinners', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getTopStudiosWithWinners().subscribe(res => {
        expect(res).toEqual(Mocks.mockgetTopStudiosWithWinners);
      });
      const req = httpTestingController.expectOne('https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count');
      expect(req.request.method).toEqual('GET');
      req.flush(Mocks.mockgetTopStudiosWithWinners);
      httpTestingController.verify();
    });
  });

  describe('getMaxMinIntervalProducers', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getMaxMinIntervalProducers().subscribe(res => {
        expect(res).toEqual(Mocks.mockgetMaxMinIntervalProducers);
      });
      const req = httpTestingController.expectOne('https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers');
      expect(req.request.method).toEqual('GET');
      req.flush(Mocks.mockgetMaxMinIntervalProducers);
      httpTestingController.verify();
    });
  });
});
