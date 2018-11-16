import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: User;

  constructor() { }
  isLoggedIn(): boolean {
    if (this.user && this.user.name) {
      return true
    } else {
      return false;
    }
  }

  auth(data): User {
    if (data && data.name) {
      this.user = new User(data.name);
    }
    return this.user;
  }

  getAuthUser(): User {
    return this.user;
  }
}
