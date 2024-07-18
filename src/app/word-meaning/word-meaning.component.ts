import { Component, inject } from '@angular/core';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-word-meaning',
  standalone: true,
  imports: [],
  templateUrl: './word-meaning.component.html',
  styleUrl: './word-meaning.component.scss'
})
export class WordMeaningComponent {
  darkmode = inject(ThemeService);
}
