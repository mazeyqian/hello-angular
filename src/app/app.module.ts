import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginInlineTemplateInlineStyleComponent } from './login--inline-template--inline-style/login--inline-template--inline-style.component';
import { LoginItIsComponent } from './login-it-is/login-it-is.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from "./core/auth.service";
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginInlineTemplateInlineStyleComponent,
    LoginItIsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide: 'auth', useClass: AuthService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
