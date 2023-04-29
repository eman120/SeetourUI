import { Component, Input } from '@angular/core';
import { ReviewCard } from 'src/app/Interfaces/review-card';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {

  @Input() review: ReviewCard | undefined;

  get tourLink(): string {
    return this.review ? `/tour/${this.review.bookedTourId}` : '#';
  }

  get photos() {
    if (this.review)
    {
      return this.review.photos.slice(0, 9);
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
