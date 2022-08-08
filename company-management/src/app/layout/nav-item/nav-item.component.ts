import {Component, Input, OnInit} from '@angular/core';
import {MenuOption} from "../model/menu-option";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {

  @Input()
  option: MenuOption;

  expanded: boolean;

  constructor(private router: Router) { }

  public onOptionSelected(option: MenuOption): void {
    if(option.children && option.children.length) {
      this.expanded = !this.expanded;
    } else {
      this.router.navigate([option.url])
    }

  }

}
