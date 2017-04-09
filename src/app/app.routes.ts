import { Routes } from '@angular/router';
import { TodoRoutes } from './todo/todo.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: './todo/list',
    pathMatch: 'full'
  },
  ...TodoRoutes
];
