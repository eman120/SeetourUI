import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'like-button',
  template: `
    <div class="d-flex align-items-center">
      <button type="button" class="btn border heart-button" [class.active]="isLiked" (click)="like()">
        <i class="bi-heart-fill heart-icon" *ngIf="isLiked"></i>
        <i class="bi-heart heart-icon" *ngIf="!isLiked"></i>
        {{ likes }}
      </button>
    </div>
  `,
  styles: [`
    .heart-button {
      font-size: 1rem;
      color: #ccc;
    }
    .heart-icon {
      font-size: 1rem;
    }
    .active {
      color: red;
    }
  `]
})
export class LikeButtonComponent {
  @Input() likes: number = 0;
  @Input() isLiked: boolean | null = null;
  @Input() TourId: number = 0;

  @Output() liked = new EventEmitter<{ isLiked: boolean, TourId: number }>()

  constructor(private customer: CustomerService){}

  like() {

    this.isLiked = !this.isLiked;
    this.likes += this.isLiked ? 1 : -1;

    this.customer.PostTourLike({tourId: this.TourId, isAdded: this.isLiked?1:0 }).subscribe({
      next: () => {
        this.liked.emit({isLiked: this.isLiked??false, TourId: this.TourId});
      },
      error: () => {
        this.isLiked = !this.isLiked;
        this.likes += this.isLiked ? 1 : -1;
      }
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.isLiked == null)
    this.customer.isLiked(this.TourId).subscribe({
      next: () => {
        this.isLiked = true;
      },
      error: () => {
        this.isLiked = false;
      }
    })
  }
}
