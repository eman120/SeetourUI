import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { FavoriteService } from 'src/app/Services/favorite.service';

@Component({
  selector: 'app-customer-favorite-tours',
  templateUrl: './customer-favorite-tours.component.html',
  styleUrls: ['./customer-favorite-tours.component.css']
})
export class CustomerFavoriteToursComponent {

  Filter(filter: any = undefined) {
    this.GetTours(filter)
  }

  tours: TourCard[] | undefined;

  constructor(
    private favorites: FavoriteService,
    private router: Router,
    private titleService: Title,
    route:ActivatedRoute
  ) {
    route.queryParams.subscribe(p => this.Filter());
  }

  ngOnInit(): void {
    this.Filter()
  }

  GetTours(filter:any) {

    this.titleService.setTitle(`Seetour - Favorites`);

    this.tours = undefined;

    this.favorites.GetTours(filter).subscribe({
        next: (data) => {
          this.tours = data as TourCard[];
        },
        error: () => {
          this.router.navigateByUrl('/Error')
        }
      });
  }
}
