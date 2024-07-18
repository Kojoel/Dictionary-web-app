import { Component, inject } from '@angular/core';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-status-bar',
  standalone: true,
  imports: [],
  templateUrl: './status-bar.component.html',
  styleUrl: './status-bar.component.scss'
})
export class StatusBarComponent {
  darkmode = inject(ThemeService);

  
}
