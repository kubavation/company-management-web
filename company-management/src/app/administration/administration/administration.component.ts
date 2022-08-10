import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable, of} from "rxjs";
import {ConfigOptionGroup} from "./config-option/model/config-option-group";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdministrationComponent {

  optionsMock$: Observable<ConfigOptionGroup[]> = of([
    {
      name: 'test1',
      description: 'test1 desc test1',
      url: '/test1'
    },
    {
      name: 'test2',
      description: 'test1 desc test1',
      url: '/test1',
      icon: 'score'
    },
    {
      name: 'test3',
      description: 'test1 desc test1',
      url: '/test1',
      icon: 'score'
    },
    {
      name: 'test4',
      description: 'test1 desc test1',
      url: '/test1',
      icon: 'score'
    },
    {
      name: 'test5',
      description: 'test1 desc test1',
      url: '/test1',
      icon: 'score'
    }
  ])

  constructor() { }


}
