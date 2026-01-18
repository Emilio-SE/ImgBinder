import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LucideAngularModule, CircleCheck, LoaderCircle, CircleAlert, LucideIconData } from 'lucide-angular';
import { SavingStatus } from './status-check.enum';

@Component({
  selector: 'app-status-check',
  imports: [CommonModule, TranslocoModule, LucideAngularModule],
  templateUrl: './status-check.html',
  styleUrl: './status-check.scss'
})
export class StatusCheck {
  @Input() status: SavingStatus = "success";

  public readonly CircleCheckIcon: LucideIconData = CircleCheck;
  public readonly LoaderCircleIcon: LucideIconData = LoaderCircle;
  public readonly CircleAlertIcon: LucideIconData = CircleAlert;

}
