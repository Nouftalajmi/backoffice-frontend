import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewCustomerComponent } from '../../modules/add-new-customer/add-new-customer.component';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  constructor(private _dialog: MatDialog) {}
  addNewCus() {
    this._dialog.open(AddNewCustomerComponent);
  }
}
