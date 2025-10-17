import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-preview-pane',
  imports: [],
  templateUrl: './preview-pane.html',
  styleUrl: './preview-pane.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewPane {}
