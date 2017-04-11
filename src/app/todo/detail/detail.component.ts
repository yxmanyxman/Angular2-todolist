import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  selectedTodo: Todo;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private todoService: TodoService) { }
  ngOnInit() {
    const todoId = + this.activatedRoute.snapshot.params['id']; // 单次载入当前页面有效,获取当前页面路由url的id参数
    this.selectedTodo = this.todoService.getTodoId(todoId); // 返回当前选中id的todo
    if (!this.selectedTodo) {
      this.router.navigate(['/todo/list']); // 若id的这个todo任务不存在，重定向到list组件
    }
  }
  /* 后退函数 */
  goBack() {
    window.history.back();
  }
}
