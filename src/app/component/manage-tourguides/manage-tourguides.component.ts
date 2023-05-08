import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'jquery';

@Component({
  selector: 'app-manage-tourguides',
  templateUrl: './manage-tourguides.component.html',
  styleUrls: ['./manage-tourguides.component.css']
})
export class ManageTourguidesComponent implements OnInit  {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  users : any;
  ngOnInit(): void {
    this.http.get("https://localhost:7277/api/Admin/guides").subscribe({
      next: (data) => {
        this.users = data;
      },
      error: () => { }
    });
  }

  onDelete(id : any){
    this.http.delete("https://localhost:7277/api/Admin/"+id).subscribe({
      next: (data) => {
        console.log("Deleted successfully");
        this.http.get("https://localhost:7277/api/Admin/guides").subscribe({
        next: (data) => {
          this.users = data;
        },
          error: () => { }
        });
      },

    });
  }
}
