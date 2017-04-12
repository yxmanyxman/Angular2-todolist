import { Routes } from '@angular/router';
import { TodoRoutes } from './todo/todo.routes'; // 导入todoComponent
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/todo/list',
    pathMatch: 'full'
  },
  ...TodoRoutes
];
