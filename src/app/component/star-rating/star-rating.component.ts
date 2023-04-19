import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  template: `
    <span *ngFor="let i of [0, 1, 2, 3, 4]" class="star"
      [class.filled]="i < rating" [class.empty]="i >= rating">
      &#9733;
    </span>
    ({{count}})
  `,
  styles: [`
    .star {
      color: #ccc;
    }
    .filled {
      color: gold;
    }
    .empty {
      color: #ccc;
    }
  `]
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() count: number = 0;
}
