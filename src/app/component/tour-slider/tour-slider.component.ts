import { Component, Input } from '@angular/core';
import { TourCard } from 'src/app/Interfaces/tour-card';

@Component({
  selector: 'app-tour-slider',
  templateUrl: './tour-slider.component.html'
})
export class TourSliderComponent {
  @Input() Tours: TourCard[] = [];
  @Input() Title: string = "";
  @Input() MoreText: string = "";
  @Input() MoreLink: string = "";
  @Input() MoreOutlet: string = "primary";

  get link() { return {outlets: { [this.MoreOutlet]: [this.MoreLink] }} };
}
