import { Component, Input } from '@angular/core';
import { ReviewCard } from 'src/app/Interfaces/review-card';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {
  @Input() review: ReviewCard | undefined;
}
