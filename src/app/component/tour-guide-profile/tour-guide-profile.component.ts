import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { ReviewCard } from 'src/app/Interfaces/review-card';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tour-guide-profile',
  templateUrl: './tour-guide-profile.component.html',
  styleUrls: ['./tour-guide-profile.component.css']
})
export class TourGuideProfileComponent implements OnInit {

  upcomingTours: TourCard[] | undefined;
  pastTours: TourCard[] | undefined;
  reviews: ReviewCard[] | undefined;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const tourguideId = this.route.snapshot.paramMap.get('id');

    const urlUpcoming = environment.baseUrl+ApiPaths.tourguide+ApiPaths.tgUpcomingTours+tourguideId
    this.http.get(urlUpcoming).subscribe({
      next: (data) => {
        this.upcomingTours = data as TourCard[];
      }
    });

    const urlPast = environment.baseUrl+ApiPaths.tourguide+ApiPaths.tgPastTours+tourguideId
    this.http.get(urlPast).subscribe({
      next: (data) => {
        this.pastTours = data as TourCard[];
      }
    });

    const urlReviews = environment.baseUrl+ApiPaths.tourguide+ApiPaths.tgReviews+tourguideId
    this.http.get(urlReviews).subscribe({
      next: (data) => {
        this.reviews = data as ReviewCard[];
      }
    });
  }
}
