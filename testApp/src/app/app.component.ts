import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  public ngOnInit(): void {
    this.createObservable();
  }

  public createObservable() {
    let a = 0;
    const o = new Observable(sub => {
      setInterval(() => {
        a++;
        sub.next(a);
      }, 1000)
    });

    o.subscribe(data => {
      console.log(data);
    });

    o.subscribe(data => {
      console.log(data);
    });
  }
}
