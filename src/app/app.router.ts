import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { StoreDataComponent } from './store-data/store-data.component';
import { HomeComponent } from './home/home.component';

export const Router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent },
    { path: 'form', component: FormComponent },
    { path: 'store', component: StoreDataComponent },
    { path: 'home', component: HomeComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(Router);
