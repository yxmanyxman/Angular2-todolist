import { Routes } from '@angular/router';
import { todoRoutes } from './todo/todo.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/todo/list',
    pathMatch: 'full'
  },
  ...todoRoutes
];
