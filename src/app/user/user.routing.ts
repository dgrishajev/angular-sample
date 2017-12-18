import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';

import { UserListResolver, UserResolver } from './user.resolvers';

export const ROUTES = RouterModule.forChild([
  {
    path: 'users',
    component: UserListComponent,
    resolve: { user: UserListResolver }
  },
  {
    path: 'users/:id',
    component: UserDetailComponent,
    resolve: { user: UserResolver }
  },
  {
    path: 'users/:id/edit',
    component: UserEditComponent,
    resolve: { user: UserResolver }
  }
]);