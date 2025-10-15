import { Component } from '@angular/core';
import { LucideAngularModule, LucideIconData, Code } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  public readonly CodeIcon: LucideIconData = Code; 
}
