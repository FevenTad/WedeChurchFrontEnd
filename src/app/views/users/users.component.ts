import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/views/users/user.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { UsersPaginator, User, UserRole } from 'app/views/users/user.object.mapper';
import { Role } from 'app/views/role_and_permission/role.interface';

@Component({
  templateUrl: './users.component.html'
})
export class UserComponent implements OnInit {
  users = new UsersPaginator();
  usernew = new User();
  roles: Role;
  userroles = new UserRole();
  constructor(private userservice: UserService ) { }

  ngOnInit(){
    this.UpdatepagePaginator();
    this.userservice.getRoles().subscribe(
      res => {this.roles = res}
    );
  }
  // onSubmit(form: NgForm ){
  //   this.userservice.addUser(form.value).subscribe(
  //   response => { this.UpdatepagePaginator()} );
  //   form.reset();
  // }
  UpdatepagePaginator(){
    this.userservice.getUsers().subscribe(res => this.users = res);
  }
  getPaginatedUser(url: string){
    this.userservice.getUserAtUrl(url)
    .subscribe(response=>this.users = response);
  }
  onassignrole(user) {
    this.usernew = user;
    this.userroles.email = this.usernew.email;
  }
  onassign(){
    this.userservice.assignRole(this.userroles)
    .subscribe(res => {this.UpdatepagePaginator()});
  }
  // onupdate() {
  //   this.userservice.updateUser(this.usernew.id, this.usernew)
  //   .subscribe(response => {this.UpdatepagePaginator()});
  // }
  ondelete() {
    this.userservice.deleteUser(this.usernew.id)
    .subscribe(response => {this.UpdatepagePaginator()});
  }
}