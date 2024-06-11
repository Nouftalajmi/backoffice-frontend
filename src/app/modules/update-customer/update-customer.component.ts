import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, HttpClientModule],
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent implements OnInit {
  customer: any = {
    id: '',
    name: '',
    number: '',
    dob: '',
    gender: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.customer.id = params['id'];
      this.getCustomerDetails();
    });
  }

  getCustomerDetails() {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found, redirecting to login');
      this.router.navigate(['/login']);
      return;
    }

    this.http
      .get(`http://localhost:8000/customers/${this.customer.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe((response: any) => {
        console.log('Customer details fetched successfully', response);
        this.customer = response;
      });
  }

  updateCustomer() {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found, redirecting to login');
      this.router.navigate(['/login']);
      return;
    }

    this.http
      .put(
        `http://localhost:8000/customers/${this.customer.id}`,
        this.customer,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .subscribe((response: any) => {
        console.log('Customer updated successfully', response);
        this.router.navigate(['/dashboard']);
      });
  }
}
