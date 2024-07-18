import { Component, inject } from '@angular/core';
import { ThemeService } from '../service/theme.service';
import { FontService } from '../service/font.service';

@Component({
  selector: 'app-status-bar',
  standalone: true,
  imports: [],
  templateUrl: './status-bar.component.html',
  styleUrl: './status-bar.component.scss'
})
export class StatusBarComponent {
  darkmode = inject(ThemeService);
  font = inject(FontService);

  changeValue(font: any) {
    this.font.selectedFont = font.target.value;
  }
}
