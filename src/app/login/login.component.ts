import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../model/loginModel';
import { Mp3ServiceService } from '../Services/mp3-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:LoginModel = new LoginModel();

  constructor(private service:Mp3ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  Login(){
    this.service.Login(this.model).subscribe(user =>{
      this.service.SaveToken(JSON.stringify(user));
      
      this.router.navigate(['/consulta']);

    }, error => {

    })
  }

}
