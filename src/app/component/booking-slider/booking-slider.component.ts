import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  @Input() CanRemove: boolean | undefined;
  @Input() CanReview: boolean | undefined;
  @Input() CanCancel: boolean | undefined;
  @Input() CanReport: boolean | undefined;

  ReviewTourbookingId: number | undefined;
  ReviewTourbookingTitle: string | undefined;

  constructor(private router: Router) {

  }

  get link() { return {outlets: { [this.MoreOutlet]: [this.MoreLink] }} };

  Review(booking: BookedTour) {

    if (this.ReviewTourbookingId == booking.id) {
      this.ReviewTourbookingId = undefined;
      return;
    }

    this.ReviewTourbookingId = booking.id;
    this.ReviewTourbookingTitle = booking.tourCard.title;
  }

  Reviewed() {
    if (this.Bookings && this.ReviewTourbookingId) {

      const booking = this.Bookings.filter(b => b.id == this.ReviewTourbookingId)[0];
      if (booking)
        booking.canReview = 0;
    }
  }

  CancelBooking(Booking: BookedTour) {
    this.router.navigate([`customer/tour/cancel`], {state: Booking});
  }

  Remove(Booking: BookedTour) {
    if (this.Bookings) {
      this.Bookings.splice(this.Bookings.findIndex(b => b.id == Booking.id), 1);
    }
  }
}
