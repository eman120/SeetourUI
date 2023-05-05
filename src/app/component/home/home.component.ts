import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  viewsCount: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Make the API call to increment the views count
    this.http.post<number>('https://localhost:44362/api/DashBoard/incrementviews', {}).subscribe((result) => {
      // Update the views count with the result from the API call

    });
  }
}

