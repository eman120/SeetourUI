import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavoriteService } from 'src/app/Services/favorite.service';

@Component({
  selector: 'app-favorite-button',
  template: `
    <button type="button" class="btn btn-primary text-white border rounded-circle favorite-button"
    [class.active]="isFavorite" (click)="toggleFavorite()">
      <i class="bi bi-star-fill favorite-icon" *ngIf="isFavorite"></i>
      <i class="bi bi-star favorite-icon" *ngIf="!isFavorite"></i>
    </button>
  `,
  styles: [`
    .favorite-button {
      font-size: 1rem;
    }
    .favorite-icon {
      font-size: 1rem;
    }
    .active {
    }
  `]
})
export class FavoriteButtonComponent {
  @Input() isFavorite: boolean = false;
  @Input() tourguideId: string = '';

  @Output() favoriteed = new EventEmitter<{ isFavorite: boolean, tourguideId: string }>();

  constructor(private favorite: FavoriteService){}

  toggleFavorite() {

    this.isFavorite = !this.isFavorite;

    this.favorite.ToggleFavorite(this.tourguideId, this.isFavorite).subscribe({
      next: () => {
        this.favoriteed.emit({isFavorite: this.isFavorite, tourguideId: this.tourguideId});
      },
      error: () => {
        this.isFavorite = !this.isFavorite;
      }
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.favorite.isFavorite(this.tourguideId).subscribe({
      next: () => {
        this.isFavorite = true;
      },
      error: () => {
        this.isFavorite = false;
      }
    })
  }
}
