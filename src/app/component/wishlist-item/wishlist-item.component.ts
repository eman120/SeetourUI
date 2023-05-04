import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishList } from 'src/app/Interfaces/wishlist';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent {
@Input() oneWishlist:WishList|undefined;
// @Output() cusname=new EventEmitter<string>();


ngOnInit(): void {
}
get tourLink(): string {
  return this.oneWishlist ? `/tour/${this.oneWishlist.tourId}` : '#';
}
get tourguideLink(): string {
  return this.oneWishlist? `/tourguide/${this.oneWishlist.tourGuideId}` : '#';
}
}
