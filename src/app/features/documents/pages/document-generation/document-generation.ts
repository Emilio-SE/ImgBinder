import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SettingsSection } from './settings-section/settings-section';
import { PreviewSection } from './preview-section/preview-section';
import { PreviewMenuStates } from './services/preview-menu-states';
import { ImageContentBridge } from './services/image-content-bridge';

@Component({
  selector: 'app-document-generation',
  imports: [CommonModule, SettingsSection, PreviewSection],
  providers: [PreviewMenuStates, ImageContentBridge],
  templateUrl: './document-generation.html',
  styleUrl: './document-generation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentGeneration {
  // Injections
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  private previewMenuStatesSvc: PreviewMenuStates = inject(PreviewMenuStates);

  // Properties
  private _documentId: string | null = null;
  public isSettingsOpen: boolean = false;

  constructor() {
    effect(() => {
      this.isSettingsOpen = this.previewMenuStatesSvc.isMobileMenuActive();
    });
  }

  ngOnInit(): void {
    this._documentId = this.route.snapshot.paramMap.get('id');
    console.log(this._documentId);
  }
}
