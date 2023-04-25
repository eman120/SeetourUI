import { Component, Input } from '@angular/core';
import { ReviewCard } from 'src/app/Interfaces/review-card';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {

  @Input() review: ReviewCard | undefined = {
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
  }

  get photos() {
    if (this.review)
    {
      return this.review.Photos.slice(0, 9);
    }
    else
      return [];
  }

  showGallery: boolean = false;


  openGallery() {
    this.showGallery = true;
  }

  closeGallery() {
    this.showGallery = false;
  }

}
