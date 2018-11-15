import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { GenericTodoService } from '../models/generic.todo.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  public title = undefined;
  public data = 'tutu';
  public colorClass = '';
  public myFilter;

  public todos;

  constructor(private todoService: GenericTodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();

    setTimeout(() => {
      this.title = {
        content : 'hello'
      };
    }, 3000);
  }


  public clickHandler(): void {
    console.log("You clicked me!");
    this.colorClass = 'app-red-bg';
  }

  public validInput(param1: HTMLInputElement) {
    console.log(param1.value);
  }

  public addTodo(title: HTMLInputElement, content: HTMLInputElement) {
    console.log('You click add todo');
    this.todoService.getTodos().push( new Todo(title.value, content.value, true));
  }

  public addFilter(filtre) {
    this.myFilter = filtre.value;
  }

  public todoSelected(todo: Todo) {
    console.log('Event received from todo comp');
    console.log(todo)
  }

}
