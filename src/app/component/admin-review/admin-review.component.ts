import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.css']
})
export class AdminReviewComponent implements OnInit {
  reviews: any;
  tourGuideName: any;
  tourLink: any;
  FullName:any;
  Comment:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://localhost:7277/api/Review').subscribe(
      data => {
        this.reviews = data;
      },
      error => {
        console.error(error);
      }
    );


  }
  deleteReview(id: any) {
    this.http.delete(`https://localhost:44362/api/Review?id=${id}`).subscribe(() => {
      this.http.get<any[]>('https://localhost:44362/api/Review').subscribe(
        data => {
          this.reviews = data;
        },
        error => {
          console.error(error);
          alert('Failed to fetch reviews. Please refresh the page.');
        }
      );
    });
  }




}
