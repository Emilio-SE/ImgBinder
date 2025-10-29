import { Injectable, Signal, signal } from '@angular/core';
import { RawImage } from '@core/models/interface/image.interface';

@Injectable()
export class ImageContentBridge {
  private showPreviewPaneSignal = signal<boolean>(false);
  private imagesUploadedSignal = signal<RawImage[]>([])

  public get showPreviewPane(): Signal<boolean> {
    return this.showPreviewPaneSignal.asReadonly();
  }

  public get imagesUploaded(): Signal<RawImage[]> {
    return this.imagesUploadedSignal.asReadonly();
  } 

  public set showPreviewPane(show: boolean) {
    this.showPreviewPaneSignal.set(show);
  }

  public set imagesUploaded(images: RawImage[]) {
    this.imagesUploadedSignal.set(images);
  }

}
