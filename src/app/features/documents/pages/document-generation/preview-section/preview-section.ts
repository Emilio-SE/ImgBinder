import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject } from '@angular/core';
import { PreviewMenu } from './preview-menu/preview-menu';
import { PreviewPane } from './preview-pane/preview-pane';
import { UploadPane } from './upload-pane/upload-pane';
import { ImageContentBridge } from '../services/image-content-bridge';

@Component({
  selector: 'app-preview-section',
  imports: [PreviewMenu, PreviewPane, UploadPane],
  templateUrl: './preview-section.html',
  styleUrl: './preview-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewSection {
  // Injections
  private cdr = inject(ChangeDetectorRef);
  private imageBridgeSvc: ImageContentBridge = inject(ImageContentBridge);
  
  // Properties
  public showPreview: boolean = false;

  constructor() {
    effect(() => {
      this.showPreview = this.imageBridgeSvc.showPreviewPane();
      this.cdr.markForCheck();
    });
  }
}
