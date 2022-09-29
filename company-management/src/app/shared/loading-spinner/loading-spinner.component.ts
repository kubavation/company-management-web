import { Component, OnInit } from '@angular/core';
import {LoaderService} from "../service/loader.service";

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {

  isLoading$ = this.loaderService.isLoading$;

  constructor(private loaderService: LoaderService) {

  }

}

