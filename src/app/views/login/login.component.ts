import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/views/auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  public isauthenticated: boolean;
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLogin(form: NgForm){
    this.authservice.authenticate(form.value.email, form.value.password);
       this.authservice.autheticate_emiter.subscribe( res => {
         this.isauthenticated = res;
         if(this.isauthenticated){
           this.router.navigate(['/churches']);
         }else{
             this.isauthenticated = false;
             this.authservice.messsage_emiter.subscribe(res => {console.log(res)});
         }

    } );
    
  }
}
