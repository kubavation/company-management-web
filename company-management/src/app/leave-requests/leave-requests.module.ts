import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRequestsComponent } from './leave-requests.component';
import { LeaveRequestListComponent } from './leave-request-list/leave-request-list.component';
import {LeaveRequestsRoutingModule} from "./leave-requests-routing.module";
import {SharedModule} from "../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import { LeaveRequestListFiltersComponent } from './leave-request-list-filters/leave-request-list-filters.component';
import { NewLeaveRequestComponent } from './new-leave-request/new-leave-request.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    LeaveRequestsComponent,
    LeaveRequestListComponent,
    LeaveRequestListFiltersComponent,
    NewLeaveRequestComponent
  ],
    imports: [
        CommonModule,
        LeaveRequestsRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatCardModule
    ]
})
export class LeaveRequestsModule { }
