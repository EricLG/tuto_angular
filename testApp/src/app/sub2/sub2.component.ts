import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {

  public users: Array<User>;
  public users2: Observable<User[]>;
  public filteredUser: User;

  public usersR: User[];

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    })
    this.users2 = this.userService.getUsers();

    this.userService
    .getUsers()
    .mergeMap(res => res)
    .filter(elem => elem.username === 'Bret')
    .subscribe(data => {
      this.filteredUser = data;
      console.log(data)
    });

    // Resolver
    this.route.data.subscribe(data => {
      this.usersR = data['msg'];
    } );
  }

}
