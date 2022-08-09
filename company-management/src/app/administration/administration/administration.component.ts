import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  optionsMock$ = of([
    {
      name: 'test1'
    },
    {
      name: 'test2'
    },
    {
      name: 'test3'
    },
    {
      name: 'test4'
    },
    {
      name: 'test5'
    }
  ])

  constructor() { }

  ngOnInit() {
  }

}
