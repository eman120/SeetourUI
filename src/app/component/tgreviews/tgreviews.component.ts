import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { ReviewCard } from 'src/app/Interfaces/review-card';
import { TourGuide } from 'src/app/Interfaces/tour-guide';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tgreviews',
  templateUrl: './tgreviews.component.html'
})
export class TGReviewsComponent {
  reviews: ReviewCard[] = [];
  @Input() tourGuide: TourGuide | undefined;

  constructor(
    private http: HttpClient,
    private titleService:Title
  ) { }

  ngOnInit(): void {
    const tourguideId = this.tourGuide?.id;
    const urlBase = environment.baseUrl+ApiPaths.tourguide+'/'+tourguideId;

    this.titleService.setTitle("Seetour - " + this.tourGuide?.name + " - Reviews");

    const urlReviews = urlBase+ApiPaths.tgReviews
    this.http.get(urlReviews).subscribe({
      next: (data) => {
        this.reviews = data as ReviewCard[];
      },
      error: () => {}
    });
  }
}
