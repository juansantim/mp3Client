import { Component, OnInit } from '@angular/core';
import { Archivo } from 'src/app/model/Archivo';
import { PaginationResult } from 'src/app/model/PaginationResult';

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

  OnResultadoConsulta(data:PaginationResult){
    this.Archivos = data.data;
  }

  OnPaginationChange(data){
    console.log('pagination changed', data);
  }

}
