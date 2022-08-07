import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {FormBuilder} from "@angular/forms";
import {FormConfig} from "../model/form-config";

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent {

  public constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public show(): void {
    this.dialog.open(null);
  }

  public onSave(){
    return null;
  }



}