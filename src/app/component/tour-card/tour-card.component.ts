import { Component, Input } from '@angular/core';
import { TourCard } from 'src/app/Interfaces/tour-card';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent {
  @Input() tour: TourCard | undefined;
}
