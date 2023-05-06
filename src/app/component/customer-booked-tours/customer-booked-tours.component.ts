import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { BookedTour } from 'src/app/Interfaces/booked-tour';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer-booked-tours',
  templateUrl: './customer-booked-tours.component.html',
  styleUrls: ['./customer-booked-tours.component.css']
})
export class CustomerBookedToursComponent {
  upcomingBookings: BookedTour[] | undefined;
  completedBookings: BookedTour[] | undefined;
  cancelledBookings: BookedTour[] | undefined;

  constructor(private customer: CustomerService, title:Title,
    private router: Router) {
    title.setTitle('Seetour - Booked Tours');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.customer.GetIsCompletedBookings(ApiPaths.customerTourUpcoming).subscribe({
      next: (data) => {
        this.upcomingBookings = data as BookedTour[];
      },
      error: () => {
        this.router.navigateByUrl('error');
      }
    });

    this.customer.GetIsCompletedBookings(ApiPaths.customerTourCompleted).subscribe({
      next: (data) => {
        this.completedBookings = data as BookedTour[];
      },
      error: () => {
        this.router.navigateByUrl('error');
      }
    });

    this.customer.GetIsCompletedBookings(ApiPaths.customerTourCancelled).subscribe({
      next: (data) => {
        this.cancelledBookings = data as BookedTour[];
      },
      error: () => {
        this.router.navigateByUrl('error');
      }
    });
  }
}
