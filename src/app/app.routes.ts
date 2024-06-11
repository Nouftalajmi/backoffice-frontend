import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { AddNewCustomerComponent } from './modules/add-new-customer/add-new-customer.component';
import { UpdateCustomerComponent } from './modules/update-customer/update-customer.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'add-new', component: AddNewCustomerComponent },
  { path: 'update-customer/:id', component: UpdateCustomerComponent },
  { path: 'dashboard', component: DashboardComponent },
];
