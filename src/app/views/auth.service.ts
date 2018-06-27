import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http/@angular/http';
import { Headers } from '@angular/http/src/headers';
import { Observable }     from 'rxjs/Observable';
import { HttpService } from 'app/views/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService {
  @Output() autheticate_emiter = new EventEmitter<boolean>();
  @Output() messsage_emiter = new EventEmitter<string>();
  public is_authenticated: boolean;
  constructor(private httprequest: HttpService) { }

  authenticate(email: string, password:string){
    return this.httprequest.sendPostRequest('authenticate',{email: email, password: password},{headers : new HttpHeaders({'Content-Type': 'application/json'})})
    .subscribe(
      data => { this.authenticate_user(data, true )},
          error => { this.authenticate_user(error, false ) }
    );
  }
  public login(login_data){
    if(login_data){
      this.autheticate_emiter.emit(true);
      this.is_authenticated = true;
      console.log(login_data);
    }else {
      this.autheticate_emiter.emit(false);
      this.is_authenticated = false;
    }
  }
  private authenticate_user(response: any, status) {
    if ( status) {
          if (response && response.token) {
               this.storeUserToken(response.token);
             this.is_authenticated = true;
               this.login(response);
          } else{
            this.is_authenticated = false;

           }
    }
    else{
      this.messsage_emiter.emit('Username or Password incorrect');
    }

  }
  public storeUserToken( user_token: string ) {
    localStorage.setItem('token_auth_key', user_token);
  }
  public getUserToken() {
  return localStorage.getItem('token_auth_key');
  // console.log(localStorage.getItem('token_auth_key'))

  }
}

