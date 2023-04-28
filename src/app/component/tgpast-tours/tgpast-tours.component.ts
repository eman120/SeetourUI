import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { TourGuide } from 'src/app/Interfaces/tour-guide';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tgpast-tours',
  templateUrl: './tgpast-tours.component.html'
})
export class TGPastToursComponent {
  tours: TourCard[] | undefined;
  @Input() tourGuide: TourGuide | undefined;

  constructor(
    private http: HttpClient,
    private titleService:Title
  ) { }

  ngOnInit(): void {
    const tourguideId = this.tourGuide?.id;
    const urlBase = environment.baseUrl+ApiPaths.tourguide+'/'+tourguideId;

    this.titleService.setTitle("Seetour - " + this.tourGuide?.name + " - Past Tours");

    const urlUpcoming = urlBase+ApiPaths.tgPastTours
    this.http.get(urlUpcoming).subscribe({
      next: (data) => {
        this.tours = data as TourCard[];
      },
      error: () => {}
    });
  }
}
