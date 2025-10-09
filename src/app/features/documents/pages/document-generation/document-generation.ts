import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-generation',
  imports: [],
  templateUrl: './document-generation.html',
  styleUrl: './document-generation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentGeneration {

  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);

  private _documentId: string | null = null;

  ngOnInit(): void {
    this._documentId = this.route.snapshot.paramMap.get('id');
    console.log(this._documentId)
  }

}
