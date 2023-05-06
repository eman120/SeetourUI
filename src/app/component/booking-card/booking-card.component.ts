import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookedTour } from 'src/app/Interfaces/booked-tour';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent {

  @Input() CanReview: boolean | undefined;
  @Input() CanCancel: boolean | undefined;
  @Input() CanReport: boolean | undefined;

  @Input() DisplayPhotos: boolean = true;

  @Input() Booking: BookedTour | undefined;
  @Output() OnReview: EventEmitter<void> = new EventEmitter<void>();

  get booking() {

    console.log(this.Booking)

    let display = this.Booking;

    if (this.Booking && !this.DisplayPhotos) {

      display = { ...this.Booking, tourCard: {...this.Booking.tourCard, photos: this.Booking.tourCard.photos.slice()}};

      display!.tourCard.photos = [];
    }

    return display;
  }

  constructor(private router: Router) { }

  Review() {
    this.OnReview.emit();
  }

  CancelBooking(Booking: BookedTour) {
    this.router.navigate([`customer/tour/cancel`], {state: Booking});
  }
}
