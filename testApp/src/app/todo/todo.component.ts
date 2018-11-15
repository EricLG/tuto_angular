import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  todoSelect = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  public todoSelected(){
    this.todoSelect.emit(this.todo);
  }

}
