import { Component, Input } from '@angular/core';
import { TourCard } from 'src/app/Interfaces/tour-card';

@Component({
  selector: 'app-tour-lister',
  templateUrl: './tour-lister.component.html',
})
export class TourListerComponent {
  @Input() tours: TourCard[] | undefined;
}
