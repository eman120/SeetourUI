import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { ToursService } from 'src/app/Services/tours.service';

@Component({
  selector: 'app-tour-home',
  templateUrl: './tour-home.component.html',
  styleUrls: ['./tour-home.component.css']
})
export class TourHomeComponent {

  Filter(filter: any = undefined) {
    this.GetTours(filter)
  }

  tours: TourCard[] | undefined;

  constructor(
    private toursService: ToursService,
    private titleService: Title
  ) {  }

  ngOnInit(): void {
    this.Filter()
  }

  GetTours(filter:any) {

    this.titleService.setTitle(`Seetour - Upcoming tours`);

    this.tours = undefined;

    this.toursService.GetTours(false, filter).subscribe({
        next: (data) => {
          this.tours = data as TourCard[];
        }
      });
  }
}
