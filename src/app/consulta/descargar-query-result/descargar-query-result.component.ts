import { Component, OnInit } from '@angular/core';
import { Mp3ServiceService } from 'src/app/Services/mp3-service.service';
import { DataFilter } from 'src/app/model/DataFilter';
import { PaginationResult } from 'src/app/model/PaginationResult';

@Component({
  selector: 'app-descargar-query-result',
  templateUrl: './descargar-query-result.component.html',
  styleUrls: ['./descargar-query-result.component.css']
})
export class DescargarQueryResultComponent implements OnInit {

  constructor(private service:Mp3ServiceService) { }

  dataFilter:DataFilter = new DataFilter();
  paginationResult: PaginationResult = new PaginationResult();

  ngOnInit(): void {
    this.service.ChangeFilterSubject.subscribe(data => {
      this.dataFilter = data;
    })

    this.service.fitroAplicadoSubject.subscribe(data => {
      this.paginationResult = data;
    })
  }

  Descargar(){
      this.service.GetDownloadAll(this.dataFilter).subscribe(data => {
        console.log('file created')
      })
  }

}
