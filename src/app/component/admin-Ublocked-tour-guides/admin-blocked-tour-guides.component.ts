import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-blocked-tour-guides',
  templateUrl: './admin-blocked-tour-guides.component.html',
  styleUrls: ['./admin-blocked-tour-guides.component.css']
})
export class AdminBlockedTourGuidesComponent implements OnInit {
  tourguides: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTourGuides();
  }

  getTourGuides() {
    this.http.get('https://localhost:7277/api/Admin/GettingBlockedTourGuides').subscribe(result => {
      this.tourguides = result;
    }, error => console.error(error));
  }

  blockTourGuide(id: any) {
    this.http.post(`https://localhost:7277/api/Admin/tourguidesUnblock?id=${id}`, null).subscribe(result => {
      this.getTourGuides();
    }, error => console.error(error));

}

}

