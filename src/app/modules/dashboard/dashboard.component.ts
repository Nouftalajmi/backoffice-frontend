import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  customers: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.getCustomers(); // Fetch all customers on component initialization
  }

  getCustomers() {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    if (!token) {
      console.error('No token found, redirecting to login');
      this.router.navigate(['/login']);
      return;
    }

    this.http
      .get('http://localhost:8000/customers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe((response: any) => {
        console.log('Customers fetched successfully', response);
        this.customers = response; // Update the customer list
      });
  }
  goAdd() {
    this.router.navigate(['/add-new']);
  }
  // logout() {
  //   localStorage.removeItem('token'); // Clear the token from localStorage
  //   this.router.navigate(['/login']); // Redirect to login page
  // }
}
