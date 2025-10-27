import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PreviewMenu } from './preview-menu/preview-menu';
import { PreviewPane } from './preview-pane/preview-pane';
import { UploadPane } from './upload-pane/upload-pane';

@Component({
  selector: 'app-preview-section',
  imports: [PreviewMenu, PreviewPane, UploadPane],
  templateUrl: './preview-section.html',
  styleUrl: './preview-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewSection {
  // Properties
  public showPreview: boolean = false;
}
