import { Component, inject } from '@angular/core';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  darkmode = inject(ThemeService);
}
