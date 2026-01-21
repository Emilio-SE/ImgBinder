import { inject, Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotifyService {
  private _snackBar = inject(MatSnackBar);

  public openSnackbar(
    message: string,
    action: string | undefined,
    type: 'info' | 'success' | 'warning' | 'danger',
    config?: MatSnackBarConfig<any>,
  ): MatSnackBarRef<TextOnlySnackBar> {
    config ??= {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    };

    config.panelClass = [`mat-snackbar-${type}`];

    return this._snackBar.open(message, action, config);
  }
}
