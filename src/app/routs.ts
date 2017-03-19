import { Component, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

