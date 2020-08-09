import { Component, OnInit, Input } from '@angular/core';
import { Archivo } from 'src/app/model/Archivo';
import { Mp3ServiceService } from 'src/app/Services/mp3-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  @Input()
  Archivos:Archivo[] = [];

  constructor(private service:Mp3ServiceService) { }

  ngOnInit(): void {
  }
  
  onEnded($event){

  }

  GetAudioUrl(id){
    return this.service.GetAudioUrl(id);
  }

  QuitarReproduccion(archivo:Archivo){
    archivo.Playing = false;
  }

  Reproducir(archivo:Archivo){
    archivo.Playing = true;
  }

}
