import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.html',
  styleUrl: './history.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class History {
  
  private cdr = inject(ChangeDetectorRef);

}
