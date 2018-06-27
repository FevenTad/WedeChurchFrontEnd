import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth.service';
import { HttpService } from 'app/views/http.service';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { User, UsersPaginator, UserRole } from 'app/views/users/user.object.mapper';
import { Role } from 'app/views/role_and_permission/role.interface';

@Injectable()
export class UserService {
    headers = new Headers({'Content-Type': 'application/json'});
    token = this.auths.getUserToken();

  constructor(private http: Http, private auths: AuthService) { }

  // addUser(user: User){
  //   return this.http.post('http://localhost:8000/admin/users?token='+this.token, user, {headers: this.headers});
  // }

  getUsers(){
    return this.http.get('http://localhost:8000/admin/users?token='+this.token).map(
      response => response.json() as UsersPaginator
    );
  }
  getUserAtUrl(url: string){
    return this.http.get(url + '&token=' + this.token)
    .map(response => response.json() as UsersPaginator);
  }
  // updateUser(id: number, User: User){
  //   return this.http.put('http://localhost:8000/admin/users/'+ id + '?token=' + this.token, User, {headers: this.headers});
  // }
  deleteUser(id: number){
    return this.http.delete('http://localhost:8000/admin/users/'+ id+ '?token=' + this.token);
  }
  getRoles(){
    return this.http.get('http://localhost:8000/admin/roles/all?token='+this.token).map(
      response => response.json() as Role
    );
  }
  assignRole(userrole: UserRole){
    return this.http.post('http://localhost:8000/admin/assign-role?token='+this.token, userrole, {headers: this.headers});
  }
}
