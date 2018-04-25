import { Routes , RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from 'app/login/login.component';


const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent }

    // {path: '', component : AppComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);