import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject } from '@angular/core';
import { ImageContentBridge } from '../../services/image-content-bridge';

@Component({
  selector: 'app-preview-pane',
  imports: [],
  templateUrl: './preview-pane.html',
  styleUrl: './preview-pane.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewPane {

  // Injections
  private cdr = inject(ChangeDetectorRef);
  private imageBridgeSvc: ImageContentBridge = inject(ImageContentBridge);
  
  constructor() {
    effect(() => {
      console.log(this.imageBridgeSvc.imagesUploaded());
      this.cdr.markForCheck();
    })
  }

}
