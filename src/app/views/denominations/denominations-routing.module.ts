import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DenominationComponent } from 'app/views/denominations/denominations.component';

const routes: Routes = [
  {
    path: '',
    component: DenominationComponent,
    data: {
      title: 'Denominations'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DenominationRoutingModule {}
