import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontService {
  fonts = ["mono", "serif", "san serif"];
  constructor() { }
}
