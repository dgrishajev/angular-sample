import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { UserResolve } from './user.resolve';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'view/:id', component: ViewComponent, resolve: { user: UserResolve } },
  { path: 'edit/:id', component: EditComponent },
  { path: '**', redirectTo: '/list', pathMatch: 'full' },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
