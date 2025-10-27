import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ChevronDown, LucideAngularModule, LucideIconData } from 'lucide-angular';
import { DropdownMenuOption } from './preview-menu-dropdown.interface';

@Component({
  selector: 'app-preview-menu-dropdown',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './preview-menu-dropdown.html',
  styleUrl: './preview-menu-dropdown.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewMenuDropdown {
  @Input() placeholder: string = '';
  @Input() icon!: LucideIconData;
  @Input() options!: DropdownMenuOption[];
  @Output() OnOptionSelected: EventEmitter<DropdownMenuOption> = new EventEmitter();

  public readonly ChevronDownIcon: LucideIconData = ChevronDown;

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: DropdownMenuOption) {
    this.isDropdownOpen = false;
    this.OnOptionSelected.emit(option);
  }
}
