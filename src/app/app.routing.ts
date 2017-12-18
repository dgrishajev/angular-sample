import { RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';

export const ROUTES = RouterModule.forRoot([
  { path: 'users', component: UserListComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
]);