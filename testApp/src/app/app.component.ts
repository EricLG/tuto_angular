import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';

  constructor(
    private meta: Meta,
    private httpClient: HttpClient
  ) {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      });
  }
}
