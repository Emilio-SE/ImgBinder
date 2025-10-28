import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ImageUploader } from '@core/services/image-uploader';
import { Button } from '@shared/components/button/button';
import { ButtonData } from '@shared/components/button/button.interface';
import { HardDriveUpload, LucideIconData } from 'lucide-angular';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-upload-pane',
  imports: [TranslocoModule, Button],
  templateUrl: './upload-pane.html',
  styleUrl: './upload-pane.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadPane {
  @ViewChild('inputFile') inputFile!: ElementRef<HTMLInputElement>;

  // Injections
  private translocoSvc: TranslocoService = inject(TranslocoService);
  private cdrSvc: ChangeDetectorRef = inject(ChangeDetectorRef);
  private imageUploaderSvc: ImageUploader = inject(ImageUploader);

  // Observables
  private destroy$: Subject<void> = new Subject();

  // Properties
  public uploadBtnConfig: ButtonData = {
    icon: HardDriveUpload,
    text: ''
  };

  public ngOnInit(): void {
    this.setObservableTranslations();
  }

  private setObservableTranslations(): void {
    this.translocoSvc
      .selectTranslateObject('uploadPane.btnUpload')
      .pipe(takeUntil(this.destroy$))
      .subscribe((translation: string) => {
        this.uploadBtnConfig.text = translation;
        this.uploadBtnConfig = { ...this.uploadBtnConfig };
        this.cdrSvc.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async onDrop(event: DragEvent): Promise<void> {
    event.preventDefault();
    event.stopPropagation();

    const images = await this.imageUploaderSvc.drop(event);
  }

  public async onFilesSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const images = await this.imageUploaderSvc.upload(input.files);
    }
  }

  public onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  public openFolderSelection(): void {
    this.inputFile.nativeElement.click();
  }
}
