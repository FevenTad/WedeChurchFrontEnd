import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from 'app/app.routing';
import { AuthService } from 'app/auth.service';
import { ChurchComponent } from './church/church.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChurchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
