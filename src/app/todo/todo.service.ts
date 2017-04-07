import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable() /*依赖注入*/
export class TodoService{
  /* 自增id */
  Id: number = 0;
  /* todoitems */
  todos: Todo[] = [];
  constructor() {}
  //添加函数
  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.Id;
    }
    this.todos.push(todo);
    return this; //返回TodoService对象
  }
  //删除函数
  deleteTodo(id: number): TodoService {
    if (!id) {
      return null;
    }
    this.todos = this.todos.filter(todo => todo.id! == id); //?????????
    return this;
  }
  //更新函数
  updateTodo(id: number, values: Object = {}): Todo {
    let todo = this.getTodoId(id);
    if (!todo){ return null };
    Object.assign(todo, values); //将更新后的values复制至todo目标对象，并返回todo
    return todo;
  }
  //获取所有
  getAllTodos(): Todo[]{
    return this.todos;
  }
  //标记list完成函数
  toggleComplete(todo: Todo) {
    let toggleTodo = this.updateTodo(todo.id, { complete: !todo.complete });
    return toggleTodo;
  }
  //获取某个todo的id函数
  getTodoId(id: number) {
    return this.todos.filter(todo => todo.id === id).pop(); //pop()返回删除id的对应todo
  }

}
