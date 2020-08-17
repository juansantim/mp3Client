import { Component, OnInit } from '@angular/core';
import { Mp3ServiceService } from 'src/app/Services/mp3-service.service';
import { DataFilter } from 'src/app/model/DataFilter';
import { PaginationResult } from 'src/app/model/PaginationResult';
import * as FileSaver from 'file-saver';
import { ToastrService } from 'ngx-toastr';
 

declare var require: any

@Component({
  selector: 'app-descargar-query-result',
  templateUrl: './descargar-query-result.component.html',
  styleUrls: ['./descargar-query-result.component.css']
})
export class DescargarQueryResultComponent implements OnInit {

  constructor(private service: Mp3ServiceService, private toastr: ToastrService) { }

  dataFilter: DataFilter = new DataFilter();
  paginationResult: PaginationResult = new PaginationResult();

  ngOnInit(): void {
    this.service.ChangeFilterSubject.subscribe(data => {
      this.dataFilter = data;
    })

    this.service.fitroAplicadoSubject.subscribe(data => {
      this.paginationResult = data;
    })
  }


  Descargar() {
    this.toastr.warning('Inicializando descarga de archivos...')
    this.service.GetDownloadAll(this.dataFilter).subscribe((data: ArrayBuffer) => {
      this.toastr.warning('Guardando archivos')

      const blob = new Blob([data], { type: 'application/zip' });      
      FileSaver.saveAs(blob, 'data.zip')
      this.toastr.success('Archivos descargado satisfactoriamente')
    })
  }
}
