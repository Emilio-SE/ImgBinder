import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/layouts/header/header';
import { Footer } from "./shared/layouts/footer/footer";
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private transloco: TranslocoService = inject(TranslocoService);
  
  ngOnInit() {
    document.documentElement.lang = this.transloco.getActiveLang();

    this.transloco.langChanges$.subscribe(lang => {
      document.documentElement.lang = lang;
    });
  }
}
