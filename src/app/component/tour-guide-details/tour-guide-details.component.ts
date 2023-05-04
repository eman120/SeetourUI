import { Component, Input } from '@angular/core';
import { TourGuideDetails } from 'src/app/Interfaces/tour-guide-details';

@Component({
  selector: 'app-tour-guide-details',
  templateUrl: './tour-guide-details.component.html',
  styleUrls: ['./tour-guide-details.component.css']
})
export class TourGuideDetailsComponent {
  @Input() tourguide: TourGuideDetails|undefined;
}
