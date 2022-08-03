import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-abstract-base-modal',
  templateUrl: './abstract-base-modal.component.html',
  styleUrls: ['./abstract-base-modal.component.scss']
})
export class AbstractBaseModalComponent {

  constructor(private fb: FormBuilder) { }
}
