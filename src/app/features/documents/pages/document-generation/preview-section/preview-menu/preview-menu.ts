import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
  LucideAngularModule,
  LucideIconData,
  Ellipsis,
  Save,
  Trash2,
  Settings2,
  ImageUp,
  ArrowLeftToLine,
  ArrowRightToLine,
} from 'lucide-angular';
import { StatusCheck } from './status-check/status-check';
import { PreviewMenuDropdown } from './preview-menu-dropdown/preview-menu-dropdown';
import { DropdownMenuOption } from './preview-menu-dropdown/preview-menu-dropdown.interface';
import { Subject, takeUntil } from 'rxjs';
import { PreviewMenuButton } from './preview-menu-button/preview-menu-button';
import { PreviewMenuStates } from '../../services/preview-menu-states';
import { SavingStatus } from './status-check/status-check.enum';

@Component({
  selector: 'app-preview-menu',
  imports: [
    CommonModule,
    TranslocoModule,
    LucideAngularModule,
    StatusCheck,
    PreviewMenuDropdown,
    PreviewMenuButton,
  ],
  templateUrl: './preview-menu.html',
  styleUrl: './preview-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewMenu {
  // Injections
  private translocoSvc: TranslocoService = inject(TranslocoService);
  private previewMenuStatesSvc: PreviewMenuStates = inject(PreviewMenuStates);

  // Observables
  private destroy$: Subject<void> = new Subject();

  // Icons
  public readonly EllipsisIcon: LucideIconData = Ellipsis;
  public readonly ImageUpIcon: LucideIconData = ImageUp;
  public readonly SaveIcon: LucideIconData = Save;
  public readonly Trash2Icon: LucideIconData = Trash2;
  public readonly Settings2: LucideIconData = Settings2;

  // Properties
  public status: SavingStatus = 'error';

  public addImageOptions: DropdownMenuOption[] = [
    { icon: ArrowLeftToLine, value: 'before', text: '' },
    { icon: ArrowRightToLine, value: 'after', text: '' },
  ];
  public mobileMenuOptions: DropdownMenuOption[] = [
    { icon: ArrowLeftToLine, value: 'before', text: '' },
    { icon: ArrowRightToLine, value: 'after', text: '' },
    { icon: Save, value: 'save', text: '' },
    { icon: Trash2, value: 'delete', text: '' },
  ];

  public ngOnInit(): void {
    this.setObservableTranslations();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setObservableTranslations(): void {
    this.translocoSvc
      .selectTranslateObject('previewMenu')
      .pipe(takeUntil(this.destroy$))
      .subscribe((translations) => {
        this.mobileMenuOptions[0].text = translations.addBefore;
        this.mobileMenuOptions[1].text = translations.addAfter;
      });

    this.translocoSvc
      .selectTranslateObject('common')
      .pipe(takeUntil(this.destroy$))
      .subscribe((translations) => {
        this.addImageOptions[0].text = translations.before;
        this.addImageOptions[1].text = translations.after;
        this.mobileMenuOptions[2].text = translations.save;
        this.mobileMenuOptions[3].text = translations.delete;
      });
  }

  // Methods
  public onSaveProject(): void {
    console.log('On save project');
  }

  public onDeletePage(): void {
    console.log('On delete page');
  }

  public onDropdownSelection(option: DropdownMenuOption): void {
    console.log(option.value);
  }

  public toggleMobileMenu(): void {
    this.previewMenuStatesSvc.toggleMobileMenu();
  }
}
