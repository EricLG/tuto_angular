import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User('');

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
  }

  submit(data) {
    if (this.authService.auth(data)) {
      this.router.navigate(["/messages"]);
    } else {
      this.router.navigate(["/login"]);
    }
  }

}
