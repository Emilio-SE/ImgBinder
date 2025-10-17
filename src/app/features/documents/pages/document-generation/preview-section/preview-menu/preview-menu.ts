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
import { Subscription } from 'rxjs';
import { PreviewMenuButton } from './preview-menu-button/preview-menu-button';

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

  // Icons
  public readonly EllipsisIcon: LucideIconData = Ellipsis;
  public readonly ImageUpIcon: LucideIconData = ImageUp;
  public readonly SaveIcon: LucideIconData = Save;
  public readonly Trash2Icon: LucideIconData = Trash2;
  public readonly Settings2: LucideIconData = Settings2;

  // Properties
  private subscriptions: Subscription[] = [];

  public status: 'saving' | 'success' | 'error' = 'success';

  private _isMobileMenuOpen: boolean = false;
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
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  private setObservableTranslations(): void {
    this.subscriptions.push(
      this.translocoSvc
        .selectTranslateObject('previewMenu.addBefore')
        .subscribe((translation: string) => {
          this.mobileMenuOptions[0].text = translation;
        })
    );

    this.subscriptions.push(
      this.translocoSvc
        .selectTranslateObject('previewMenu.addAfter')
        .subscribe((translation: string) => {
          this.mobileMenuOptions[1].text = translation;
        })
    );

    this.subscriptions.push(
      this.translocoSvc.selectTranslateObject('common.before').subscribe((translation: string) => {
        this.addImageOptions[0].text = translation;
      })
    );

    this.subscriptions.push(
      this.translocoSvc.selectTranslateObject('common.after').subscribe((translation: string) => {
        this.addImageOptions[1].text = translation;
      })
    );

    this.subscriptions.push(
      this.translocoSvc.selectTranslateObject('common.save').subscribe((translation: string) => {
        this.mobileMenuOptions[2].text = translation;
      })
    );

    this.subscriptions.push(
      this.translocoSvc.selectTranslateObject('common.delete').subscribe((translation: string) => {
        this.mobileMenuOptions[3].text = translation;
      })
    );
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
    this._isMobileMenuOpen = !this._isMobileMenuOpen;
    console.log(this._isMobileMenuOpen);
  }
}
