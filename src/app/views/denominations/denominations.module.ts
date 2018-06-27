import { NgModule } from '@angular/core';


import { DenominationComponent } from 'app/views/denominations/denominations.component';
import { DenominationRoutingModule } from 'app/views/denominations/denominations-routing.module';
import { DenominationService } from 'app/views/denominations/denomination.service';
import { FilterPipe } from 'app/views/denominations/filter.pipe';

import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    DenominationRoutingModule,
    HttpModule,
    CommonModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [ DenominationComponent, FilterPipe ],
  providers: [DenominationService],
  exports: [
    ModalModule
]
})
export class DenominationModule { }
