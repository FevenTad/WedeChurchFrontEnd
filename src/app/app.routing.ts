import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SimpleLayout,
    data: {
      title: 'Login'
    },
    children: [
      {
        path: 'login',
        loadChildren: './views/login/login.module#LoginModule'
      },
    ]
  },
  {
    path: '',
    component: FullLayout,
    data: {
      title: ''
    },
    children: [
  
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'denominations',
        loadChildren: './views/denominations/denominations.module#DenominationModule'
      },
      {
        path: 'churches',
        loadChildren: './views/churches/churches.module#ChurchModule'
      },
      {
        path: 'users',
        loadChildren: './views/users/users.module#UserModule'
      },
      {
        path: 'roles',
        loadChildren: './views/role_and_permission/roles.module#RoleModule'
      }
    ]
  },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
