import { Component, OnInit, Output, Input } from '@angular/core';
import { Mp3ServiceService } from 'src/app/Services/mp3-service.service';
import { Archivo } from 'src/app/model/Archivo';
import { EventEmitter } from '@angular/core';
import { DataFilter } from 'src/app/model/DataFilter';
import { PaginationResult } from 'src/app/model/PaginationResult';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  dataFilter: DataFilter = new DataFilter();
  pagination = new PaginationResult();
 

  constructor(private servie: Mp3ServiceService) { }

  @Output()
  OnSearch = new EventEmitter();

  @Output()
  OnSearchStatusChanged = new EventEmitter();

  
  @Output()
  OnPaginationChange = new EventEmitter();



  ngOnInit(): void {
    this.servie.ChangePageSubject.subscribe(page => {
      this.pagination.currentPage = page;
      this.Buscar()
    })

    this.servie.ChangePageSizeSubject.subscribe(pageSize => {
      this.pagination.currentPage = 1;
      this.pagination.pageSize = pageSize;
      this.Buscar()
    })
  }

  ngOnDestroy() {
    //this.eventsSubscription.unsubscribe();
  }

  Buscar() {
    
    this.OnSearchStatusChanged.emit(true);
    this.servie.GetAllAudios(this.dataFilter, this.pagination).subscribe(data => {
      this.OnSearch.emit(data);
      this.OnPaginationChange.emit(data);
      this.OnSearchStatusChanged.emit(false);
      this.servie.fitroAplicadoSubject.next(data);

    });
  }
}
