import { Component, inject } from '@angular/core';
import { ThemeService } from '../service/theme.service';
import { FontService } from '../service/font.service';
import { FormsModule } from '@angular/forms';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  data = inject(DataService);
  value = 'lakjsdf';
  
  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'; 

  constructor(private http: HttpClient) { }

  fetchData() {
     this.http.get(this.apiUrl + this.value).subscribe((response) => {
      this.data.returnedData = response;
      console.log(this.data.returnedData);
     });
  }

  // getValue() {
  //   // console.log(this.apiUrl + this.value);
  //   this.fetchData.subscribe()
  // }
}
