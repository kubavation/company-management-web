import { Component, OnInit } from '@angular/core';
import {LayoutService} from "./service/layout.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  menuOptions$ = this.layoutService.getMenuOptions();

  constructor(private layoutService: LayoutService) { }

}
