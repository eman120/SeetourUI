import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-customer-unblock',
  templateUrl: './admin-customer-unblock.component.html',
  styleUrls: ['./admin-customer-unblock.component.css']
})
export class AdminCustomerUnblockComponent implements OnInit {
  customers: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.http.get('https://localhost:7277/api/Admin/GettingAllBlockedCustomers').subscribe(result => {
      this.customers = result;
    }, error => console.error(error));
  }

  blockCustomer(id: any) {
    this.http.post(`https://localhost:7277/api/Admin/CustomersUnblock?id=${id}`, null).subscribe(result => {
      this.getCustomers(); // Refresh the list of customers

    }, error => console.error(error));
  }
}
