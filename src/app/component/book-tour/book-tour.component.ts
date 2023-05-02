import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book-tour',
  templateUrl: './book-tour.component.html',
  styleUrls: ['./book-tour.component.css']
})
export class BookTourComponent implements OnInit {

  tour: any;
  question:any;
  dateFrom:any;
  tourAnswer:any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const tourId = this.route.snapshot.paramMap.get('id');
    const url = environment.baseUrl+ApiPaths.tour+ApiPaths.tourdetails+tourId

    this.http.get(url).subscribe({
      next: (data) => {
        this.tour = data;
        console.log(data);
      },
      error: () => {
        //this.router.navigateByUrl('/Error');
      }
    });
  }

}
