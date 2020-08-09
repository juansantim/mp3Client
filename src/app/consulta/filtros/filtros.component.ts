import { Component, OnInit, Output } from '@angular/core';
import { Mp3ServiceService } from 'src/app/Services/mp3-service.service';
import { Archivo } from 'src/app/model/Archivo';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  filtrarFechas: boolean;
  filtrarOrigen: boolean;
  filtrarDestino: boolean;

  constructor(private servie: Mp3ServiceService) { }

  @Output()
  OnSearch = new EventEmitter();

  ngOnInit(): void {
  }

  Buscar() {
    this.servie.GetAllAudios().subscribe(data => {
      this.OnSearch.emit(data);
    });
  }
}
