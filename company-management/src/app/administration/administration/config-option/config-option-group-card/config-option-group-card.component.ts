import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ConfigOptionGroup} from "../model/config-option-group";
import {Router} from "@angular/router";

@Component({
  selector: 'app-config-option-group-card',
  templateUrl: './config-option-group-card.component.html',
  styleUrls: ['./config-option-group-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigOptionGroupCardComponent {

  @Input() configOptionGroup: ConfigOptionGroup;

  constructor(private router: Router) { }

  open(): void {
    this.router.navigate([this.configOptionGroup.url]);
  }

}
