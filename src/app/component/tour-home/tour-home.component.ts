import { Component } from '@angular/core';
import { TourCard } from 'src/app/Interfaces/tour-card';

@Component({
  selector: 'app-tour-home',
  templateUrl: './tour-home.component.html',
  styleUrls: ['./tour-home.component.css']
})
export class TourHomeComponent {

  tours: TourCard[] = [];

}
