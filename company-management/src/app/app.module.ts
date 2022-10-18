import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {OrganisationService} from "./administration/administration/organisation/service/organisation.service";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatGridListModule} from '@angular/material/grid-list';
import {LayoutModule} from "./layout/layout.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { ConfirmationModalProvider } from './shared/confirmation-modal/confirmation-modal-provider/confirmation-modal-provider.service';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {LoadingInterceptor} from "./shared/interceptor/loading.interceptor";
import {SharedModule} from "./shared/shared.module";
import {CorsInterceptor} from "./shared/interceptor/cors.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    SharedModule
  ],
  entryComponents: [
    ConfirmationModalComponent
  ],
  providers: [
    OrganisationService,
    ConfirmationModalProvider,
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 2000,
        horizontalPosition: "right",
        verticalPosition: "top",
      }
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true,
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
