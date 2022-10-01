import { IMovies } from './../models/IMovies';
import { IWinner } from './../models/IWinner';
import { IInterval } from './../models/IIntervalProducers';
import { IStudios } from './../models/IStudios';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IYears } from '../models/IYears';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  constructor(private http: HttpClient) {}

  getYearsMultipleWinners(): Observable<IYears> {
    const url = environment.apiURL;

    let params = new HttpParams();
    params = params.append('projection', 'years-with-multiple-winners');

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.get<IYears>(url, httpOptions);
  }

  getTopStudiosWithWinners(): Observable<IStudios> {
    const url = environment.apiURL;

    let params = new HttpParams();
    params = params.append('projection', 'studios-with-win-count');

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.get<IStudios>(url, httpOptions);
  }

  getMaxMinIntervalProducers(): Observable<IInterval> {
    const url = environment.apiURL;

    let params = new HttpParams();
    params = params.append('projection', 'max-min-win-interval-for-producers');

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.get<IInterval>(url, httpOptions);
  }

  getMovieWinnerByYear(year: number): Observable<IWinner[]> {
    const url = environment.apiURL;

    let params = new HttpParams();
    params = params.append('winner', true);
    params = params.append('year', year);

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.get<IWinner[]>(url, httpOptions);
  }

  getMovies(
    page: number = 0,
    year?: number,
    winner?: boolean
  ): Observable<IMovies> {
    const url = environment.apiURL;

    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('size', 15);
    if (winner) {
      params = params.append('winner', winner);
    }
    if (year) {
      params = params.append('year', year);
    }
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.get<IMovies>(url, httpOptions);
  }
}
