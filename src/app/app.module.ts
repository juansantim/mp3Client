import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltrosComponent } from './consulta/filtros/filtros.component';
import { ResultadosComponent } from './consulta/resultados/resultados.component';
import { ConsultaComponent } from './consulta/consulta/consulta.component';
import { PlayerComponent } from './consulta/player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DescargarAudioComponent } from './consulta/descargar-audio/descargar-audio.component';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './consulta/paginator/paginator.component';
import { DescargarQueryResultComponent } from './consulta/descargar-query-result/descargar-query-result.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    AppComponent,
    FiltrosComponent,
    ResultadosComponent,
    ConsultaComponent,
    PlayerComponent,
    DescargarAudioComponent,
    PaginatorComponent,
    DescargarQueryResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxAudioPlayerModule,
    BrowserAnimationsModule,
    FormsModule,
    PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
