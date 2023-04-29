import { Component, Input } from '@angular/core';
import { TourCard } from 'src/app/Interfaces/tour-card';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent {
  @Input() tour: TourCard | undefined;

  get tourLink(): string {
    return this.tour ? `/tour/${this.tour.id}` : '#';
  }
  get tourguideLink(): string {
    return this.tour? `/tourguide/${this.tour.tourGuideId}` : '#';
  }
}
