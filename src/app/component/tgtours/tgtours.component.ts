import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { TourGuide } from 'src/app/Interfaces/tour-guide';
import { ToursService } from 'src/app/Services/tours.service';

@Component({
  selector: 'app-tgtours',
  templateUrl: './tgtours.component.html',
  styleUrls: ['./tgtours.component.css']
})
export class TGToursComponent {

  Filter(filter: any = undefined) {
    this.GetTours(filter)
  }

  tours: TourCard[] | undefined;
  @Input() tourGuide: TourGuide | undefined;
  State: string = ""
  isCompleted: boolean = false;

  constructor(
    private toursService: ToursService,
    private titleService:Title,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe({
      next: (data) => {
        this.State = data["state"] as string;
        this.isCompleted = data["isCompleted"] as boolean;
      }
    });

    route.queryParams.subscribe(p => this.Filter());
  }

  ngOnInit(): void {
    this.Filter()
  }

  GetTours(filter:any) {
    if (this.tourGuide)
    {
      this.titleService.setTitle(`Seetour - ${this.tourGuide?.name} - ${this.State} Tours`);

      this.tours = undefined;

      this.toursService.GetTourGuideTours(this.tourGuide.id, this.isCompleted, filter).subscribe({
        next: (data) => {
          this.tours = data as TourCard[];
        },
        error: () => { }
      });
    }
  }
}
