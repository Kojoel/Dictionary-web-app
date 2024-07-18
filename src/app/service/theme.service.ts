import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDark = false;
  constructor() { }

  toggleDarkMode() {
    this.isDark = !this.isDark;
  }
}