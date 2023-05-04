import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'jquery';


@Component({
  selector: 'app-admin-statistics',
  templateUrl: './admin-statistics.component.html',
  styleUrls: ['./admin-statistics.component.css']
})
export class AdminStatisticsComponent {
  obj:any
  viewsCount: any;
  Completed:any;
  TopTourRevenueName:any;
  Revenue:any;
  RefundRate:any;
  Name:any;
  Names:any
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('https://localhost:44362/api/DashBoard/websiteviews').subscribe(result => {
      this.viewsCount = result;
    }, error => console.error(error));
    this.http.get('https://localhost:44362/api/DashBoard/CompletedTours').subscribe(result=>{
      this.Completed=result
    },error=>console.error(error));
     this.http.get('https://localhost:44362/api/DashBoard/TopTourRevenueName').subscribe(result=>{
     this.obj=result
     this.TopTourRevenueName=this.obj.tourName
     console.log(result)
     },error=>console.error(error));
     this.http.get('https://localhost:44362/api/DashBoard/TopTourRevenueMoney').subscribe(result=>{
       this.Revenue=result
    },error=>console.error(error));
     this.http.get('https://localhost:44362/api/DashBoard/refundRate').subscribe(result=>{
       this.RefundRate=result
     },error=>console.error(error));

  }


  onSearchSubmit() {
    this.http.get('https://localhost:44362/api/DashBoard/TourGuideName?Name='+ this.Name).subscribe(
      (result: any) => {
        this.Names = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
