import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { TodoListComponent } from './list/list.component';
import { TodoDetailComponent } from './detail/detail.component';
import { TodoViewComponent } from './view/view.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ TodoListComponent, TodoDetailComponent, TodoViewComponent ], /* 子组件 */
  providers: [ TodoService ]  /* 自动注入，在todo模块范围内都可以共用同个实例 */
})
export class TodoModule { }
