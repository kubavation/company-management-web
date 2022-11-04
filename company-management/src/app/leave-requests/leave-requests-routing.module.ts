import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LeaveRequestsComponent} from "./leave-requests.component";
import {NewLeaveRequestComponent} from "./new-leave-request/new-leave-request.component";

const routes: Routes = [
  {
    path: '',
    component: LeaveRequestsComponent
  },
  {
    path: 'new-leave-request',
    component: NewLeaveRequestComponent
  }
];



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LeaveRequestsRoutingModule { }
