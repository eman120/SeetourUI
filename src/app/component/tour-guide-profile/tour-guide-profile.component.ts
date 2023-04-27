import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { ReviewCard } from 'src/app/Interfaces/review-card';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { TourGuide } from 'src/app/Interfaces/tour-guide';
import { environment } from 'src/environments/environment';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-tour-guide-profile',
  templateUrl: './tour-guide-profile.component.html',
  styleUrls: ['./tour-guide-profile.component.css']
})
export class TourGuideProfileComponent implements OnInit {

  upcomingTours: TourCard[] = [];
  pastTours: TourCard[] = [];
  reviews: ReviewCard[] = [];
  tourGuide: TourGuide | undefined;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private titleService:Title
  ) { }

  ngOnInit(): void {
    const tourguideId = this.route.snapshot.paramMap.get('id');
    const urlBase = environment.baseUrl+ApiPaths.tourguide+'/'+tourguideId;

    this.http.get(urlBase).subscribe({
      next: (data) => {
        this.tourGuide = data as TourGuide;

        this.titleService.setTitle("Seetour - " + this.tourGuide.name);
      },
      error: () => {
        this.router.navigateByUrl('Error');
      }
    });

    const urlUpcoming = urlBase+ApiPaths.tgUpcomingTours
    this.http.get(urlUpcoming).subscribe({
      next: (data) => {
        this.upcomingTours = data as TourCard[];
        this.upcomingTours = [{
          Id: 1,
          Photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/250/350',
            'https://picsum.photos/300/400',
            'https://picsum.photos/350/450'
          ],
          LocationTo: "Italy, Roma",
          Price: 400,
          Likes: 39,
          isLiked: true,
          Bookings: 8,
          Capacity: 12,
          TourGuideId: "Id",
          TourGuideName: "Ahmed Ali",
          TourGuideRating: 4,
          TourGuideRatingCount: 24,
          Category: "Historical",
          Title: "The Great Gatsby Site Seeing",
          AddedToWishList: false,
          DateFrom: '15/5/2023',
          DateTo: '24/5/2023'
        },{
          Id: 1,
          Photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/250/350',
            'https://picsum.photos/300/400',
            'https://picsum.photos/350/450'
          ],
          LocationTo: "Italy, Roma",
          Price: 400,
          Likes: 39,
          isLiked: true,
          Bookings: 8,
          Capacity: 12,
          TourGuideId: "Id",
          TourGuideName: "Ahmed Ali",
          TourGuideRating: 4,
          TourGuideRatingCount: 24,
          Category: "Historical",
          Title: "The Great Gatsby Site Seeing",
          AddedToWishList: false,
          DateFrom: '15/5/2023',
          DateTo: '24/5/2023'
        },{
          Id: 1,
          Photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/250/350',
            'https://picsum.photos/350/450'
          ],
          LocationTo: "Italy, Roma",
          Price: 400,
          Likes: 39,
          isLiked: true,
          Bookings: 8,
          Capacity: 12,
          TourGuideId: "Id",
          TourGuideName: "Ahmed Ali",
          TourGuideRating: 4,
          TourGuideRatingCount: 24,
          Category: "Historical",
          Title: "The Great Gatsby Site Seeingggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
          AddedToWishList: false,
          DateFrom: '15/5/2023',
          DateTo: '24/5/2023'
        },{
          Id: 1,
          Photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/250/350',
            'https://picsum.photos/300/400',
            'https://picsum.photos/300/400',
            'https://picsum.photos/300/400',
            'https://picsum.photos/350/450',
            'https://picsum.photos/300/400',
            'https://picsum.photos/300/400',
            'https://picsum.photos/300/400',
            'https://picsum.photos/350/450'
          ],
          LocationTo: "Italy, Romaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          Price: 400,
          Likes: 39,
          isLiked: true,
          Bookings: 8,
          Capacity: 12,
          TourGuideId: "Id",
          TourGuideName: "Ahmed Aliiiiiiiiiiiiiiiiiiiiiiiiiiii",
          TourGuideRating: 4,
          TourGuideRatingCount: 24,
          Category: "Historical",
          Title: "The Great Gatsby Site Seeingggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
          AddedToWishList: false,
          DateFrom: '15/5/2023',
          DateTo: '24/5/2023'
        }];
      },
      error: () => {}
    });

    const urlPast = urlBase+ApiPaths.tgPastTours
    this.http.get(urlPast).subscribe({
      next: (data) => {
        this.pastTours = data as TourCard[];
        this.pastTours = [{
          Id: 1,
          Photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/250/350',
            'https://picsum.photos/300/400',
            'https://picsum.photos/350/450'
          ],
          LocationTo: "Italy, Roma",
          Price: 400,
          Likes: 39,
          isLiked: true,
          Bookings: 8,
          Capacity: 12,
          TourGuideId: "Id",
          TourGuideName: "Ahmed Ali",
          TourGuideRating: 4,
          TourGuideRatingCount: 24,
          Category: "Historical",
          Title: "The Great Gatsby Site Seeing",
          AddedToWishList: false,
          DateFrom: '15/5/2023',
          DateTo: '24/5/2023'
        },{
          Id: 1,
          Photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/250/350',
            'https://picsum.photos/300/400',
            'https://picsum.photos/350/450'
          ],
          LocationTo: "Italy, Roma",
          Price: 400,
          Likes: 39,
          isLiked: true,
          Bookings: 8,
          Capacity: 12,
          TourGuideId: "Id",
          TourGuideName: "Ahmed Ali",
          TourGuideRating: 4,
          TourGuideRatingCount: 24,
          Category: "Historical",
          Title: "The Great Gatsby Site Seeing",
          AddedToWishList: false,
          DateFrom: '15/5/2023',
          DateTo: '24/5/2023'
        },{
          Id: 1,
          Photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/250/350',
            'https://picsum.photos/350/450'
          ],
          LocationTo: "Italy, Roma",
          Price: 400,
          Likes: 39,
          isLiked: true,
          Bookings: 8,
          Capacity: 12,
          TourGuideId: "Id",
          TourGuideName: "Ahmed Ali",
          TourGuideRating: 4,
          TourGuideRatingCount: 24,
          Category: "Historical",
          Title: "The Great Gatsby Site Seeingggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
          AddedToWishList: false,
          DateFrom: '15/5/2023',
          DateTo: '24/5/2023'
        },{
          Id: 1,
          Photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/250/350',
            'https://picsum.photos/300/400',
            'https://picsum.photos/300/400',
            'https://picsum.photos/300/400',
            'https://picsum.photos/350/450',
            'https://picsum.photos/300/400',
            'https://picsum.photos/300/400',
            'https://picsum.photos/300/400',
            'https://picsum.photos/350/450'
          ],
          LocationTo: "Italy, Romaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          Price: 400,
          Likes: 39,
          isLiked: true,
          Bookings: 8,
          Capacity: 12,
          TourGuideId: "Id",
          TourGuideName: "Ahmed Aliiiiiiiiiiiiiiiiiiiiiiiiiiii",
          TourGuideRating: 4,
          TourGuideRatingCount: 24,
          Category: "Historical",
          Title: "The Great Gatsby Site Seeingggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
          AddedToWishList: false,
          DateFrom: '15/5/2023',
          DateTo: '24/5/2023'
        }];
      },
      error: () => {}
    });

    const urlReviews = urlBase+ApiPaths.tgReviews
    this.http.get(urlReviews).subscribe({
      next: (data) => {
        this.reviews = data as ReviewCard[];
        this.reviews = [{
          Id: 0,
          BookedTourId: 3,
          BookedTourTitle: 'Some tour title',
          TourGuideId: 'refgerfwdw',
          CustomerName: 'Ahmed Ali',
          Comment: 'lorem ipsum dolor sit amet, consectetur adip m4bthgver refvdcss trbefvdc erfvdcs al 4btgvrewcd rbgvfedc',
          Rating: 4,
          CreatedAt: '23/4/2022',
          Photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/500/300'
          ],
        },{
          Id: 0,
          BookedTourId: 3,
          BookedTourTitle: 'Some tour title',
          TourGuideId: 'refgerfwdw',
          CustomerName: 'Ahmed Ali',
          Comment: 'lorem ipsum dolor sit amet, consectetur adip m4bthgver refvdcss trbefvdc erfvdcs al 4btgvrewcd rbgvfedc',
          Rating: 4,
          CreatedAt: '23/4/2022',
          Photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/500/300'
          ],
        },{
          Id: 0,
          BookedTourId: 3,
          BookedTourTitle: 'Some tour title',
          TourGuideId: 'refgerfwdw',
          CustomerName: 'Ahmed Ali',
          Comment: 'lorem ipsum dolor sit amet, consectetur adip m4bthgver refvdcss trbefvdc erfvdcs al 4btgvrewcd rbgvfedc',
          Rating: 4,
          CreatedAt: '23/4/2022',
          Photos: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/200/300',
            'https://picsum.photos/400/300',
            'https://picsum.photos/500/300'
          ],
        }]
      },
      error: () => {}
    });
  }
}
