import { Component, OnInit, Output } from '@angular/core';
import { Mp3ServiceService } from 'src/app/Services/mp3-service.service';
import { Archivo } from 'src/app/model/Archivo';
import { EventEmitter } from '@angular/core';
import { DataFilter } from 'src/app/model/DataFilter';
import { PaginationResult } from 'src/app/model/PaginationResult';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  dataFilter: DataFilter = new DataFilter();
 

  constructor(private servie: Mp3ServiceService) { }

  @Output()
  OnSearch = new EventEmitter();

  
  @Output()
  OnPaginationChange = new EventEmitter();

  ngOnInit(): void {
  }

  Buscar() {
    let pagination = new PaginationResult();
    
    this.servie.GetAllAudios(this.dataFilter, pagination).subscribe(data => {
      this.OnSearch.emit(data);
      this.OnPaginationChange.emit(data);
    });
  }
}
