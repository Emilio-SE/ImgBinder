import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { LucideAngularModule, LucideIconData, Menu, Settings, PanelLeftClose } from 'lucide-angular'

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, TranslocoModule, LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {

  // Injections
  private router: Router = inject(Router);

  // Icons
  readonly SettingsIcon: LucideIconData = Settings;
  readonly MenuIcon: LucideIconData = Menu;
  readonly PanelLeftClose: LucideIconData = PanelLeftClose;

  // Tailwind Classes
  public readonly navLinkClasses: string[] = [
    'flex', 'text-lg', 'items-center', 'px-6', 'text-white',
    'hover:bg-rose-500', 'dark:hover:bg-slate-700',
    'transition-colors', 'cursor-pointer'
  ];

  public readonly navLinkMobileClasses: string[] = [
    'flex items-center', 'px-6', 'py-3', 'cursor-pointer',
    'transition-colors', 'border-b', 'border-rose-200', 'dark:border-zinc-700',
    'text-black', 'dark:text-white', 'hover:bg-rose-400', 'dark:hover:bg-slate-700',
    'hover:text-white'
  ];

  // Properties
  public isMobileMenuOpen: boolean = false;

  // Methods
  public reloadIfSameRoute(route: string, event: Event): void {
    event.preventDefault();

    if (this.router.url.includes(route)) {
      window.location.reload();
    } else {
      this.router.navigate([route]);
      if(this.isMobileMenuOpen) this.closeMobileMenu();
    }
  }

  public openMobileMenu(): void {
    this.isMobileMenuOpen = true;
  }

  public closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

}
