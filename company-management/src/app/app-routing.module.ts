import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./keycloak/guards/auth.guard";

const routes: Routes = [
  {
    path: 'administration',
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'leave-requests',
    loadChildren: () => import('./leave-requests/leave-requests.module').then(m => m.LeaveRequestsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: '',
    canActivate: [AuthGuard]
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
