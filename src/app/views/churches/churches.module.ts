import { NgModule } from '@angular/core';
import { ChurchRoutingModule } from 'app/views/churches/churches-routing.module';
import { ChurchComponent } from 'app/views/churches/churches.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChurchService } from 'app/views/churches/church.service';
import { FilterPipe } from 'app/views/churches/filter.pipe';
import { DenominationService } from 'app/views/denominations/denomination.service';




@NgModule({
  imports: [
    ChurchRoutingModule,
    HttpModule,
    CommonModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [ ChurchComponent, FilterPipe ],
  providers: [ChurchService, DenominationService],
  exports: [
    ModalModule
]
})
export class ChurchModule { }
