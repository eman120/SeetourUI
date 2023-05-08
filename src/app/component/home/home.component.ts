
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  viewsCount: number = 0;
  interface: string;

  constructor(private http: HttpClient, auth: AuthService, titleService:Title, router: Router) {
    titleService.setTitle("Seetour");
    this.interface = auth.getInterface();
    if (this.interface == 'tourguide') {
      router.navigateByUrl('/dashboard');
    }
  }

  ngOnInit() {
    // Make the API call to increment the views count
    this.http.post<number>('https://localhost:44362/api/DashBoard/incrementviews', {}).subscribe((result) => {
      // Update the views count with the result from the API call

    });
//export class HomeComponent {
  //constructor(titleService:Title) {
   // titleService.setTitle("Seetour")

  }
}

