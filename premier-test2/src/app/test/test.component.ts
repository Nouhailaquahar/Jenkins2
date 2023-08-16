import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private http: HttpClient) {}

  callBackend() {
    this.http.get('http://adresse-de-votre-backend/api/hello').subscribe(
      (response) => {
        alert(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
