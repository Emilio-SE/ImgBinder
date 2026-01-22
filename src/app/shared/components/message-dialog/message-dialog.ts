import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { MessageActionTaken, MessageDialogData } from './message-dialog.interface';
import { Button } from '../button/button';
import { Breakpoints } from '@core/models/enum/breakpoint.enum';

@Component({
  selector: 'app-message-dialog',
  imports: [Button],
  templateUrl: './message-dialog.html',
  styleUrl: './message-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageDialog {
  private _dialogRef = inject(DialogRef<MessageActionTaken>);
  public data: MessageDialogData = inject(DIALOG_DATA);

  @HostListener('window:resize')
  public setDimensions(): void {
    const width = window.innerWidth;
    
    width > Breakpoints.Small ? this.setWidth('470px') : this.setWidth('300px');
  }

  public ngAfterViewInit(): void {
    this.setDimensions();
  }

  private setWidth(width: string): void {
    this._dialogRef.updateSize(width);
  }

  public action(action: MessageActionTaken): void {
    this._dialogRef.close(action);
  }
}
