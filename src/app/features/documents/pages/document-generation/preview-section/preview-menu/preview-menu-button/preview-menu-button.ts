import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-preview-menu-button',
  imports: [LucideAngularModule],
  templateUrl: './preview-menu-button.html',
  styleUrl: './preview-menu-button.scss'
})
export class PreviewMenuButton {
  @Input() icon!: LucideIconData;
  @Input() text: string = "";
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  public onClickEvent(): void {
    this.onClick.emit();
  } 
}
