import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../model/loginModel';
import { Mp3ServiceService } from '../Services/mp3-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginModel = new LoginModel();
  cargando = false;

  constructor(private service: Mp3ServiceService, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  Login() {
    this.cargando = true;
    this.service.Login(this.model).subscribe(user => {
      this.service.SaveToken(JSON.stringify(user));
      this.cargando = false;
      this.router.navigate(['/consulta']);

    }, error => {
      if (error.status == 401) {
        this.toast.error('Nombre de usuario y/o password incorrectos');
      }
      else {
        this.toast.error('Hubo un error al realizar la solicitud.');
      }
      console.log(error);
      this.cargando = false;
    })
  }

}
