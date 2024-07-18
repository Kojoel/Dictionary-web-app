import { Component, inject } from '@angular/core';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-word-gen',
  standalone: true,
  imports: [],
  templateUrl: './word-gen.component.html',
  styleUrl: './word-gen.component.scss'
})
export class WordGenComponent {
  darkmode = inject(ThemeService);
}
