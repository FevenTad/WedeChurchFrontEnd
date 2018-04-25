import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { Headers } from '@angular/http/src/headers';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Response } from '_debugger';

@Injectable()
export class AuthService {
  path = 'http://localhost:8000/authenticate';
  constructor(private http: Http) { }

  login(email: string, password:string){
    return this.http.post(this.path,
      {email: email, password: password})
      .map(
        response => response.json()
      )
      .do(
        tokenData=>{
          localStorage.setItem('token', tokenData.token);
        }
      );
  }
}

