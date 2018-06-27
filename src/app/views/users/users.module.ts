import { NgModule } from '@angular/core';


import { UserComponent } from 'app/views/users/users.component';
import { UserRoutingModule } from 'app/views/users/users-routing.module';
import { UserService } from 'app/views/users/user.service';
import { FilterPipe } from 'app/views/users/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    UserRoutingModule,
    HttpModule,
    CommonModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [ UserComponent, FilterPipe ],
  providers: [UserService],
  exports: [
    ModalModule
]
})
export class UserModule { }
