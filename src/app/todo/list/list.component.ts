import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class TodoListComponent {
  newTodo: Todo = new Todo();
  constructor(private todoService: TodoService) { }  // 注入TodoService
  addTodo() {
    this.todoService.addTodo(this.newTodo); // 返回添加后的service
    this.newTodo = new Todo(); // ???????
    console.log(this.newTodo);
  }
  get todos() {
    return this.todoService.getAllTodos();
  }

}
