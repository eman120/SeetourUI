import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { ReviewCard } from 'src/app/Interfaces/review-card';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { environment } from 'src/environments/environment';

import { TourGuide } from 'src/app/Interfaces/tour-guide';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tgoverview',
  templateUrl: './tgoverview.component.html',
})
export class TGOverviewComponent implements OnInit {

  upcomingTours: TourCard[] | undefined;
  pastTours: TourCard[] | undefined;
  reviews: ReviewCard[] | undefined;
  @Input() tourGuide: TourGuide | undefined;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private titleService:Title
  ) { }

  ngOnInit(): void {
    const tourguideId = this.route.snapshot.paramMap.get('id');
    const urlBase = environment.baseUrl+ApiPaths.tourguide+'/'+tourguideId;

    this.titleService.setTitle("Seetour - " + this.tourGuide?.name);

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
