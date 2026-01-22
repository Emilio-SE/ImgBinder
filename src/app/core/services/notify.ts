import { inject, Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { Dialog } from '@angular/cdk/dialog';
import { MessageDialog } from '@shared/components/message-dialog/message-dialog';
import {
  MessageActionTaken,
  MessageDialogData,
  MessageDialogRef,
} from '@shared/components/message-dialog/message-dialog.interface';

@Injectable({ providedIn: 'root' })
export class NotifyService {
  private _snackBar: MatSnackBar = inject(MatSnackBar);
  private _dialog: Dialog = inject(Dialog);

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

  public openMessageDialog(data: MessageDialogData): MessageDialogRef {
    return this._dialog.open<MessageActionTaken, MessageDialogData, MessageDialog>(MessageDialog, {
      autoFocus: false,
      data: data,
    });
  }
}
