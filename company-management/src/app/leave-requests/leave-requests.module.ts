import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRequestsComponent } from './leave-requests.component';
import { LeaveRequestListComponent } from './leave-request-list/leave-request-list.component';
import {LeaveRequestsRoutingModule} from "./leave-requests-routing.module";



@NgModule({
  declarations: [
    LeaveRequestsComponent,
    LeaveRequestListComponent
  ],
  imports: [
    CommonModule,
    LeaveRequestsRoutingModule
  ]
})
export class LeaveRequestsModule { }
