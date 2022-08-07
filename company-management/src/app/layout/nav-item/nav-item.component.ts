import {Component, Input, OnInit} from '@angular/core';
import {MenuOption} from "../model/menu-option";

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {

  @Input()
  private option: MenuOption;

  constructor() { }

}
