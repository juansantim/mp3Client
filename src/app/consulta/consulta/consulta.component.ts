import { Component, OnInit } from '@angular/core';
import { Archivo } from 'src/app/model/Archivo';
import { PaginationResult } from 'src/app/model/PaginationResult';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.pagination  = new PaginationResult();
  }

  pagination: PaginationResult = new PaginationResult();

  OnResultadoConsulta(data:PaginationResult){
    this.pagination = data;
  }

  OnPaginationChange(event: any){
    console.log('pagination changed', event);
  }


  cargando = false;
  ShowLoading(value){
    this.cargando = value
  }

}
