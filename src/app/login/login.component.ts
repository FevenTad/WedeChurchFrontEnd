import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
  onLogin(form: NgForm){
    this.authservice.login(form.value.email, form.value.password)
    .subscribe(
      tokenData => console.log(tokenData),
      error => console.log(error)
    );
  }
}
