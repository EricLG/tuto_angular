import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { GenericTodoService } from '../models/generic.todo.service';

@Injectable()
export class TodoService implements GenericTodoService{

  public todos = new Array();

  constructor() {
    this.todos.push( new Todo('Title1', 'content1', true));
    this.todos.push( new Todo('Title2', 'content2', true));
   }

  getTodos(): Todo[] {
    return this.todos;
  }

}
