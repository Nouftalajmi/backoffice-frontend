import { Injectable } from '@angular/core';
export interface Customer {
  id: number;
  name: string;
  number: string;
  dob: string;
  gender: string;
}
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customers: Customer[] = [];

  constructor() {}

  getCustomers(): Customer[] {
    return this.customers;
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }
  // constructor() { }
}
