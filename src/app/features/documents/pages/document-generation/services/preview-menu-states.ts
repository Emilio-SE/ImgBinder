import { Injectable, Signal, signal } from '@angular/core';

@Injectable()
export class PreviewMenuStates {
  private isMobileMenuActiveSignal = signal(false);

  get isMobileMenuActive(): Signal<boolean> {
    return this.isMobileMenuActiveSignal.asReadonly();
  }

  public toggleMobileMenu(): void {
    this.isMobileMenuActiveSignal.update((value) => !value);
  }
}
