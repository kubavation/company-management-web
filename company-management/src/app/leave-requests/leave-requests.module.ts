import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRequestsComponent } from './leave-requests.component';
import { LeaveRequestListComponent } from './leave-request-list/leave-request-list.component';
import {LeaveRequestsRoutingModule} from "./leave-requests-routing.module";
import {SharedModule} from "../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    LeaveRequestsComponent,
    LeaveRequestListComponent
  ],
  imports: [
    CommonModule,
    LeaveRequestsRoutingModule,
    SharedModule
  ]
})
export class LeaveRequestsModule { }
