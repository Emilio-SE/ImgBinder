import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SettingsSection } from './settings-section/settings-section';
import { PreviewSection } from './preview-section/preview-section';

@Component({
  selector: 'app-document-generation',
  imports: [CommonModule, SettingsSection, PreviewSection],
  templateUrl: './document-generation.html',
  styleUrl: './document-generation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentGeneration {

  // Injections
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);

  // Properties
  private _documentId: string | null = null;
  public isSettingsOpen: boolean = true;

  ngOnInit(): void {
    this._documentId = this.route.snapshot.paramMap.get('id');
    console.log(this._documentId)
  }

}
