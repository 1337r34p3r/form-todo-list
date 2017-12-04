import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { StoreDataComponent } from './store-data/store-data.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UsersComponent,
    LoginComponent,
    StoreDataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
