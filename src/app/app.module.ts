import { MultipleWinnerComponent } from './components/multiple-winner/multiple-winner.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListaFilmesComponent } from './pages/lista-filmes/lista-filmes.component';
import { StudiosWithWinnersComponent } from './components/studios-with-winners/studios-with-winners.component';
import { MaxMinIntervalProducersComponent } from './components/max-min-interval-producers/max-min-interval-producers.component';
import { ListWinnerComponent } from './components/list-winner/list-winner.component';
import { FormsModule } from '@angular/forms';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleWinnerComponent,
    DashboardComponent,
    ListaFilmesComponent,
    StudiosWithWinnersComponent,
    MaxMinIntervalProducersComponent,
    ListWinnerComponent,
    ListMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
