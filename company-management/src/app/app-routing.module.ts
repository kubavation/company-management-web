import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdministrationModule} from "./administration/administration.module";

const routes: Routes = [
  {path: 'administration',
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)}
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
