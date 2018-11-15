import { Todo } from "./todo";

export abstract class GenericTodoService {
    abstract getTodos(): Array<Todo>;
}