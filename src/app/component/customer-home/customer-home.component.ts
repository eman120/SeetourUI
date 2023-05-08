import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { ReviewCard } from 'src/app/Interfaces/review-card';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent {

  favTours: TourCard[] | undefined;
  allTours: TourCard[] | undefined;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    const urlBase = environment.baseUrl;

    const urlUpcoming = urlBase+ApiPaths.favorites+ApiPaths.tour+'?Take=10';
    this.http.get(urlUpcoming).subscribe({
      next: (data) => {
        this.favTours = data as TourCard[];
      },
      error: () => {}
    });

    const urlPast = urlBase+ApiPaths.tour+'?Take=10';
    this.http.get(urlPast).subscribe({
      next: (data) => {
        this.allTours = data as TourCard[];
      },
      error: () => {}
    });
  }
}
