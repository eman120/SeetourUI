import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

;

@Component({
  selector: 'app-admin-block-tour-guidess',
  templateUrl: './admin-block-tour-guidess.component.html',
  styleUrls: ['./admin-block-tour-guidess.component.css']
})
export class AdminBlockTourGuidessComponent implements OnInit {
  tourguides: any;

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
    this.getTourGuides();
  }

  getTourGuides() {
    this.http.get('https://localhost:7277/api/Admin/GettingAllUnblockedTourGuides').subscribe(result => {
      this.tourguides = result;
    }, error => console.error(error));
  }

  blockTourGuide(id: any) {
    this.http.post(`https://localhost:7277/api/Admin/tourguidesBlock?id=${id}`, null).subscribe(result => {
      this.getTourGuides();

    }, error => console.error(error));

}
}
