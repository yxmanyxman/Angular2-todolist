import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { todoListComponent } from './list/list.component';
import { todoDetailComponent } from './detail/detail.component';
import { todoViewComponent } from './view/view.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ todoListComponent, todoDetailComponent,todoViewComponent ], /* 子组件 */
  providers: [ TodoService ]  /* 自动注入，在todo模块范围内都可以共用同个实例 */
})
export class todoModule{}
