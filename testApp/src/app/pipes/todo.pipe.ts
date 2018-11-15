import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';

@Pipe({
  name: 'todopipe'
})
export class TodoPipe implements PipeTransform {

  transform(todo: Todo, text?: string): string {
    return `Title : ${todo.title}, content : ${todo.content}, texte : ${text}`;
  }

}
