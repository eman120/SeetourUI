import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { ToursService } from 'src/app/Services/tours.service';

@Component({
  selector: 'app-trending-tours',
  templateUrl: './trending-tours.component.html',
  styleUrls: ['./trending-tours.component.css']
})
export class TrendingToursComponent {
  tours:  TourCard[] | undefined;

  constructor(private tourStore: ToursService, private router: Router){ }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tourStore.getTrending().subscribe({
      next: (data) => {
        this.tours = data as TourCard[];
      }
    })
  }
}
