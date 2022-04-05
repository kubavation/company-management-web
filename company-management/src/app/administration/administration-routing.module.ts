import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";

const routes: Route[] = [

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
