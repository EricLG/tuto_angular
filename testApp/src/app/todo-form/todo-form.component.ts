import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  public todo = new Todo('', '', false);

  constructor() { }

  ngOnInit() {
  }

  public submit(data) {
    console.log(data)
    console.log(this.todo)
  }

}
