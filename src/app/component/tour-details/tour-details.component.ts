import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  tour: any;
  question:any;
  dateFrom:any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const tourId = this.route.snapshot.paramMap.get('id');

    this.http.get(`https://localhost:44362/api/Tour/TourDetails?id=1`).subscribe(data => {
    this.tour = data;
    });
  }

}
