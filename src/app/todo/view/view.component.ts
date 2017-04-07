import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-view',
  templateUrl: 'app/todo/view/view.component.html',
  styleUrls: ['app/todo/view/view.component.css']
})
export class todoViewComponent {
  @Input() todo: Todo; //父->子通信,todo的值从父组件list中传下来
  constructor(private todoService: TodoService, private router: Router){ }
  gotoDetail(todo){
    this.router.navigate(['/todo/detail', todo.id]);
  }
  toggleComplete(todo){
    this.todoService.toggleComplete(todo);
  }
  deleteTodo(todo){
    this.todoService.deleteTodo(todo.id);
  }
}
