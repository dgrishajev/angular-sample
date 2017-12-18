import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserModule } from './user/user.module';

import { ROUTES } from './app.routing';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UserModule,
    ROUTES,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
