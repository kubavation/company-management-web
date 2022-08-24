import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'administration',
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    path: 'leave-requests',
    loadChildren: () => import('./leave-requests/leave-requests.module').then(m => m.LeaveRequestsModule)
  },
  {
    path: '**', redirectTo: ''
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
