import { Component, OnInit } from '@angular/core';
import { Archivo } from 'src/app/model/Archivo';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor() { }

  Archivos:Archivo[] = [];

  ngOnInit(): void {
  }

  OnResultadoConsulta(data){
    this.Archivos = data;
  }

}
