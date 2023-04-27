import { Component } from '@angular/core';
import { TourCard } from 'src/app/Interfaces/tour-card';

@Component({
  selector: 'app-tour-home',
  templateUrl: './tour-home.component.html',
  styleUrls: ['./tour-home.component.css']
})
export class TourHomeComponent {

  tours: TourCard[] = [{
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

}
