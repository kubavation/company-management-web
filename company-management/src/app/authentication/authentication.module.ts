import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import {SharedModule} from "../shared/shared.module";
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class AuthenticationModule { }
