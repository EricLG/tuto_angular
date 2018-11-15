import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';

@Pipe({
  name: 'todofilter'
})
export class TodofilterPipe implements PipeTransform {

  transform(todos: Array<Todo>, title?: string): Array<Todo> {
    return todos.filter((elem) => {
      return elem.title === title;
    });
  }

}
