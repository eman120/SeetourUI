import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { ReviewCard } from 'src/app/Interfaces/review-card';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { environment } from 'src/environments/environment';

import { TourSliderComponent } from '../tour-slider/tour-slider.component';

@Component({
  selector: 'app-tgoverview',
  templateUrl: './tgoverview.component.html',
})
export class TGOverviewComponent implements OnInit {

  upcomingTours: TourCard[] = [];
  pastTours: TourCard[] = [];
  reviews: ReviewCard[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const tourguideId = this.route.snapshot.paramMap.get('id');
    const urlBase = environment.baseUrl+ApiPaths.tourguide+'/'+tourguideId;

    const urlUpcoming = urlBase+ApiPaths.tgUpcomingTours
    this.http.get(urlUpcoming).subscribe({
      next: (data) => {
        this.upcomingTours = data as TourCard[];
      },
      error: () => {}
    });

    const urlPast = urlBase+ApiPaths.tgPastTours
    this.http.get(urlPast).subscribe({
      next: (data) => {
        this.pastTours = data as TourCard[];
      },
      error: () => {}
    });

    const urlReviews = urlBase+ApiPaths.tgReviews
    this.http.get(urlReviews).subscribe({
      next: (data) => {
        this.reviews = data as ReviewCard[];
      },
      error: () => {}
    });
  }
}
