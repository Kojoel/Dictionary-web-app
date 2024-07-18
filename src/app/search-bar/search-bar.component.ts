import { Component, inject } from '@angular/core';
import { ThemeService } from '../service/theme.service';
import { FontService } from '../service/font.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  darkmode = inject(ThemeService);
  font = inject(FontService);

}
