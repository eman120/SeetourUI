import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookedTour } from 'src/app/Interfaces/booked-tour';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-customer-cancel-booking',
  templateUrl: './customer-cancel-booking.component.html',
  styleUrls: ['./customer-cancel-booking.component.css']
})
export class CustomerCancelBookingComponent {

  Booking: BookedTour | undefined;
  status: string = 'pending';

  constructor (router: Router, private bookingService: BookingService) {

    var navigation = router.getCurrentNavigation();

    if (navigation && navigation.extras.state) {
      this.Booking = navigation.extras.state as BookedTour;
    }
    else {
      router.navigateByUrl('error');
    }
  };

  Cancel() {

    this.status = 'posted';

    if (this.Booking)
      this.bookingService.CancelBooking(this.Booking.id).subscribe({
        next: () => {
          this.status = 'success';
        },
        error: () => {
          this.status = 'error';
        }
      });
  }

}
