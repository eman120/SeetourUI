import { Component, Input } from '@angular/core';
import { BookedTour } from 'src/app/Interfaces/booked-tour';
import { TourCard } from 'src/app/Interfaces/tour-card';

@Component({
  selector: 'app-booking-slider',
  templateUrl: './booking-slider.component.html',
  styleUrls: ['./booking-slider.component.css']
})
export class BookingSliderComponent {
  @Input() Bookings: BookedTour[] | undefined;
  @Input() DisplayTitle: string = "";
  @Input() MoreText: string = "";
  @Input() MoreLink: string = "";
  @Input() MoreOutlet: string = "primary";

  @Input() CanReview: boolean | undefined;
  @Input() CanCancel: boolean | undefined;
  @Input() CanReport: boolean | undefined;

  get link() { return {outlets: { [this.MoreOutlet]: [this.MoreLink] }} };

  get bookings() {
    if (this.Bookings)
      this.Bookings.forEach((element) => {
        element.tourCard.photos = [];
      });

    return this.Bookings;
  }
}
