import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackbarComponent  {

  constructor() { }

}
