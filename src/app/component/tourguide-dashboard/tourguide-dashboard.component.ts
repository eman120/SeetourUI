import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tourguide-dashboard',
  templateUrl: './tourguide-dashboard.component.html',
  styleUrls: ['./tourguide-dashboard.component.css']
})
export class TourguideDashboardComponent  {

  //implements OnInit

  
  // tour: any;
  // question:any;
  // dateFrom:any;
  // tourAnswer:any;

  // constructor(
  //   private http: HttpClient,
  //   private route: ActivatedRoute
  // ) { }

  // ngOnInit(): void {
  //   const tourId = this.route.snapshot.paramMap.get('id');

  //   this.http.get(`https://localhost:7277/api/User/GetRole?username=`).subscribe(data => {
  //   this.tour = data;
  //   console.log(data);
  //   });
  //   //https://localhost:7277/api/Tour/Getbooks
  // }
}
