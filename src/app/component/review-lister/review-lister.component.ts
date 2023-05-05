import { Component, Input } from '@angular/core';
import { ReviewCard } from 'src/app/Interfaces/review-card';

@Component({
  selector: 'app-review-lister',
  templateUrl: './review-lister.component.html'
})
export class ReviewListerComponent {
  @Input() Reviews: ReviewCard[] | undefined;
  @Input() SliderTitle: string = "";
  @Input() MoreText: string = "";
  @Input() MoreLink: string = "";
  @Input() MoreOutlet: string = "primary";
  @Input() Limit: number|undefined;

  get link() { return {outlets: { [this.MoreOutlet]: [this.MoreLink] }} };
}
