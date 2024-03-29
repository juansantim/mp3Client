import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltrosComponent } from './consulta/filtros/filtros.component';
import { ResultadosComponent } from './consulta/resultados/resultados.component';
import { ConsultaComponent } from './consulta/consulta/consulta.component';
import { PlayerComponent } from './consulta/player/player.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DescargarAudioComponent } from './consulta/descargar-audio/descargar-audio.component';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './consulta/paginator/paginator.component';
import { DescargarQueryResultComponent } from './consulta/descargar-query-result/descargar-query-result.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptor } from './Services/jwtInterceptor';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    FiltrosComponent,
    ResultadosComponent,
    ConsultaComponent,
    PlayerComponent,
    DescargarAudioComponent,
    PaginatorComponent,
    DescargarQueryResultComponent,
    LoginComponent,
    MainPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxAudioPlayerModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
