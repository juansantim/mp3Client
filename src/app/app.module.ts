import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltrosComponent } from './consulta/filtros/filtros.component';
import { ResultadosComponent } from './consulta/resultados/resultados.component';
import { ConsultaComponent } from './consulta/consulta/consulta.component';
import { PlayerComponent } from './consulta/player/player.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FiltrosComponent,
    ResultadosComponent,
    ConsultaComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
