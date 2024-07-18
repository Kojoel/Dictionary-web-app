import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WordGenComponent } from './word-gen/word-gen.component';
import { WordMeaningComponent } from './word-meaning/word-meaning.component';
import { ThemeService } from './service/theme.service';
import { FontService } from './service/font.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StatusBarComponent, SearchBarComponent, WordGenComponent, WordMeaningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dictionary-web-app';
  darkmode = inject(ThemeService);
  font = inject(FontService);

  
}
