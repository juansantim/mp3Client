import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { Mp3ServiceService } from 'src/app/Services/mp3-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  usuario:User;
  constructor(private service:Mp3ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.service.getUsuarioLogueado()
  }

  CerrarSesion(){

    const action = confirm('Desea cerrar sesion?');

    if(action == true){
      this.service.CerrarSesion();
      this.router.navigate(['/login']);
    }

  }

}
