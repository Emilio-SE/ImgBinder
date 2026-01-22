import { DialogRef } from '@angular/cdk/dialog';
import { ButtonData } from '../button/button.interface';
import { MessageDialog } from './message-dialog';

export type MessageActionTaken = 'primary' | 'secondary' | undefined
export type MessageDialogRef = DialogRef<MessageActionTaken, MessageDialog>

export interface MessageDialogData {
  title: string;
  message: string;
  actions?: MessageDialogActions;
}

export interface MessageDialogActions {
  primaryAction: ButtonData;
  secondaryAction?: ButtonData;
}
