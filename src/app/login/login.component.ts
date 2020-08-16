import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../model/loginModel';
import { Mp3ServiceService } from '../Services/mp3-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:LoginModel = new LoginModel();

  constructor(private service:Mp3ServiceService) { }

  ngOnInit(): void {
  }

  Login(){
    this.service.Login(this.model).subscribe(token =>{
      this.service.SaveToken(token.toString());
    }, error => {

    })
  }

}
