import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user.interface';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UserListResolver implements Resolve<User[]> {
  constructor(private userService: UserService) {}

  resolve(): Observable<User[]> {
    return this.userService.getUsers();
  }
}

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(route.params.id);
  }
}

export const USER_RESOLVERS = [
  UserListResolver,
  UserResolver
];