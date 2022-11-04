import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject$ = new Subject<boolean>()
  public isLoading$ = this.loadingSubject$.asObservable();

  constructor() { }

  public show(): void {
    this.loadingSubject$.next(true);
  }

  public hide(): void {
    this.loadingSubject$.next(false);
  }

}
