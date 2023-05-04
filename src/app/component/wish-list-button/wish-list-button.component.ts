import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'wishlist-button',
  template: `
    <div class="d-flex align-items-center">
      <button type="button" class="btn border wishlist-button" [class.active]="isInWishlist" (click)="toggleWishlist()">
        <i class="bi bi-bookmark-plus-fill wishlist-icon" *ngIf="isInWishlist"></i>
        <i class="bi bi-bookmark-plus wishlist-icon" *ngIf="!isInWishlist"></i>
      </button>
    </div>
  `,
  styles: [`
    .wishlist-button {
      font-size: 1rem;
      color: #ccc;
    }
    .wishlist-icon {
      font-size: 1rem;
    }
    .active {
      color: green;
    }
  `]
})
export class WishListButtonComponent {
  @Input() isInWishlist: boolean = false;
  @Input() TourId: number = 0;

  @Output() wishlisted = new EventEmitter<{ isInWishlist: boolean, TourId: number }>();

  constructor(private customer: CustomerService){}

  toggleWishlist() {

    this.isInWishlist = !this.isInWishlist;

    this.customer.PostTourWish({tourId: this.TourId, isAdded: this.isInWishlist?1:0 }).subscribe({
      next: () => {
        this.wishlisted.emit({isInWishlist: this.isInWishlist, TourId: this.TourId});
      },
      error: () => {
        this.isInWishlist = !this.isInWishlist;
      }
    })
  }
}
