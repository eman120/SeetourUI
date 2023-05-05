import { WishlistItemComponent } from './../wishlist-item/wishlist-item.component';
import { Component, ViewChild } from '@angular/core';
import { WishList } from 'src/app/Interfaces/wishlist';
import { Title } from '@angular/platform-browser';
import { WishlistService } from 'src/app/Services/wishlist.service';
@Component({
  selector: 'app-customer-wishlist',
  templateUrl: './customer-wishlist.component.html',
  styleUrls: ['./customer-wishlist.component.css']
})
export class CustomerWishlistComponent {
  @ViewChild(WishlistItemComponent) WishlistItemComponent!: WishlistItemComponent;
  wishlist: WishList[] | undefined;
  emittedValue:string|undefined;

  constructor(
    private wishlistService: WishlistService,
    private titleService: Title) { }
  ngOnInit(): void {
    this.titleService.setTitle("Customer Wishlist");
    this.wishlistService.GetCustomerWishlist().subscribe(
      {
        next: (data) => {
          this.wishlist = data as WishList[];
          console.log(this.wishlist);
          // Subscribe to the valueEmitted event of the child component
      //  this.WishlistItemComponent.cusname.subscribe(
      //   (value: string) => {
      //     this.emittedValue = value;
      //   }
      // );
        
        },
        error: () => { }
      }
    )

  }
  

}