import { Route } from '@angular/router';
import { todoListComponent } from './list/list.component';
import { todoDetailComponent } from  './detail/detail.component';

export const todoRoutes: Route[] = [
  {
    path : 'todo/list',
    component: todoListComponent
  },
  {
    path:'todo/detail/:id',
    component: todoDetailComponent
  }
];
