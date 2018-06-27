import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChurchComponent } from 'app/views/churches/churches.component';

const routes: Routes = [
  {
    path: '',
    component: ChurchComponent,
    data: {
      title: 'Churches'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChurchRoutingModule {}
