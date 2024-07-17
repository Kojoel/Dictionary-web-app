import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatusBarComponent } from './status-bar/status-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StatusBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dictionary-web-app';
}
