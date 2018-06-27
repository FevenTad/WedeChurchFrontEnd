import { NgModule } from '@angular/core';

import { DenominationComponent } from 'app/views/denominations/denominations.component';
import { DenominationService } from 'app/views/denominations/denomination.service';

import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { RoleRoutingModule } from 'app/views/role_and_permission/roles-routing.module';
import { RoleComponent } from 'app/views/role_and_permission/roles.component';
import { RoleService } from 'app/views/role_and_permission/role.service';
import { FilterPipe } from 'app/views/role_and_permission/filter.pipe';


@NgModule({
  imports: [
    RoleRoutingModule,
    HttpModule,
    CommonModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [ RoleComponent, FilterPipe ],
  providers: [RoleService],
  exports: [
    ModalModule
]
})
export class RoleModule { }
