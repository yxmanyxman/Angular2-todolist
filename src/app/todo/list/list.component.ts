import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todo/list/list.component.html',
  styleUrls:[ 'app/todo/list/list.component.css']
})
export class todoListComponent {
  newTodo: Todo = new Todo();
  constructor(private todoService: TodoService){ }  //注入TodoService
  addTodo() {
    this.todoService.addTodo(this.newTodo); //返回添加后的service
    this.newTodo = new Todo(); //???????
    console.log(this.newTodo);
  }
  get todos() {
    return this.todoService.getAllTodos();
  }

}
