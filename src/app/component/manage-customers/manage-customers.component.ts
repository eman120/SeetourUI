import { Component, OnInit } from '@angular/core';
import { TourDet } from '../../Interfaces/tour-det';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit  {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  users : any;
  ngOnInit(): void {
    this.http.get("https://localhost:7277/api/Admin/users").subscribe({
      next: (data) => {
        this.users = data;
      },
      error: () => { }
    });
  }

  onDelete(id : any){
    this.http.delete("https://localhost:7277/api/Admin/" + id).subscribe({
      next: (data) => {
        console.log("Deleted successfully");
        //"/manage-customer"
        this.http.get("https://localhost:7277/api/Admin/users").subscribe({
        next: (data) => {
          this.users = data;
        },
          error: () => { }
        });
      },
      error: () => { }
    });
}
}
