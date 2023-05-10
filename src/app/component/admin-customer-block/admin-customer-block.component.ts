import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-customer-block',
  templateUrl: './admin-customer-block.component.html',
  styleUrls: ['./admin-customer-block.component.css']
})
export class AdminCustomerBlockComponent implements OnInit {
  customers: any[] = [];

  constructor(private http: HttpClient, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.http.get<any[]>('https://localhost:7277/api/Admin/GettingAllUnblockedCustomers').subscribe(result => {
      this.customers = result;
    }, error => console.error(error));
  }

  blockCustomer(id: any) {
    this.http.post(`https://localhost:7277/api/Admin/CustomersBlock?id=${id}`, null).subscribe(() => {
      // Get the updated list of blocked users from the server
      this.http.get<any[]>('https://localhost:7277/api/Admin/GettingAllUnblockedCustomers').subscribe(result => {
        this.customers = result;
      }, error => console.error(error));
    }, error => console.error(error));
  }
}
