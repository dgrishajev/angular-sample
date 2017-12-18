import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; 

import { ROUTES } from './user.routing';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';

import { UserService } from './user.service';
import { USER_RESOLVERS} from './user.resolvers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ROUTES
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserEditComponent
  ],
  providers: [
    UserService,
    ...USER_RESOLVERS
  ]
})
export class UserModule { }
