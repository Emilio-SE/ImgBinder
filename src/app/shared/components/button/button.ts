import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, LucideIconData, Ban } from 'lucide-angular';
import { ButtonState, ButtonType } from './button.enum';
import { ButtonData } from './button.interface';

@Component({
  selector: 'app-button',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  @Input() config!: ButtonData;
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  public banIcon: LucideIconData = Ban;
  public buttonStates: typeof ButtonState = ButtonState;

  public buttonClassMap: Record<string, string> = {
    [ButtonState.Primary]: 'bg-rose-400 font-semibold text-white transition-colors cursor-pointer',
    [ButtonState.Secondary]: 'bg-rose-200 dark:bg-slate-500 border border-rose-300 dark:border-slate-600 text-dark dark:text-white font-semibold cursor-pointer',
    [ButtonState.Danger]: 'bg-rose-600 font-semibold text-white cursor-pointer',
    [ButtonState.Disabled]: 'bg-stone-300 dark:bg-zinc-400 border border-stone-600 dark:border-stone-600 text-stone-600 dark:text-gray-50 font-semibold cursor-not-allowed',
  };

  get buttonClasses(): string {
    return this.buttonClassMap[this.config.state || ButtonState.Primary] ?? '';
  }

  get buttonType(): string {
    return this.config.type || ButtonType.Button;
  }

  public onClickEvent(): void {
    if(this.config.state === ButtonState.Disabled) return;
    this.onClick.emit();
  }

}
