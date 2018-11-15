import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: Array<User>;

  constructor(
    private meta: Meta,
    private httpClient: HttpClient
  ) {
  }

  isLoggedIn(): boolean {
    return true;
  }

  getUsers(): Observable<User[]> {
    return this.httpClient
    .get<User[]>('https://jsonplaceholder.typicode.com/users');
  }


}
