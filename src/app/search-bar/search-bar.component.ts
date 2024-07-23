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
  inputErrBool = false;
  value = '';
  
  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'; 

  constructor(private http: HttpClient) { }

  fetchData() {
    if (this.value.length) {
      this.inputErrBool = false;
      this.http.get(this.apiUrl + this.value).subscribe((response) => {
        this.data.returnedData = response;
        this.data.error = false;
        this.data.returnedData.forEach((item:any) => {
          item.phonetics = item.phonetics.filter((phonetic:any) => phonetic.audio !== "");
      });
        console.log(this.data.returnedData);
       },
      err=>{
        this.data.error = true;
        this.data.errorMsg = err.error
        console.log(this.data.errorMsg)
      });
    }
    else{
      this.inputErrBool = true;
      setTimeout(() => {
        this.inputErrBool = false;
      }, 10000);
    }
  }

  // getValue() {
  //   // console.log(this.apiUrl + this.value);
  //   this.fetchData.subscribe()
  // }
}
