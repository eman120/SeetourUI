import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() isLiked: boolean = false;
  @Input() Id: number = 0;

  @Output() liked = new EventEmitter()

  like() {
    this.isLiked = !this.isLiked;
    this.likes += this.isLiked ? 1 : -1;

    this.liked.emit({isLiked: this.isLiked, Id: this.Id});
  }
}
