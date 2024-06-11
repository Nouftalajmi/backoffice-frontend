import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-add-new-customer',
  standalone: true,
  imports: [
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './add-new-customer.component.html',
  styleUrl: './add-new-customer.component.css',
})
export class AddNewCustomerComponent {
  name = '';
  number = '';
  dateOfBirth = '';
  gender = '';
  customers: any[] = [];
  response: any;

  constructor(private router: Router, private http: HttpClient) {}

  select(gender: string) {
    this.gender = gender;
  }

  addCustomer() {
    const customerData = {
      name: this.name,
      number: this.number,
      dob: this.dateOfBirth,
      gender: this.gender,
    };

    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found, redirecting to login');
      this.router.navigate(['/login']);
      return;
    }

    this.http
      .post('http://localhost:8000/customers', customerData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe((response: any) => {
        console.log('Customer added successfully', response);
        this.customers.push(response);

        this.router.navigate(['/dashboard']);
      });
  }
}
