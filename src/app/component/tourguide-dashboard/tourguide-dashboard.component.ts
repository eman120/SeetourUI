import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dashboard } from 'src/app/Interfaces/dashboard';
import { TourGuide } from 'src/app/Interfaces/tour-guide';
import { DashboardstatisticsService } from 'src/app/Services/dashboardstatistics.service';
import { TourguidService } from 'src/app/Services/tourguid.service';

@Component({
  selector: 'app-tourguide-dashboard',
  templateUrl: './tourguide-dashboard.component.html',
  styleUrls: ['./tourguide-dashboard.component.css']
})
export class TourguideDashboardComponent implements OnInit{
  statistics : any;
  tourguide : TourGuide | undefined;
  constructor(private statisticsService: DashboardstatisticsService , private tourguideService: TourguidService,) { }

  ngOnInit(): void {
    this.tourguideService.GetCurrentTourGuideInfo().subscribe({
      next: (data) => {
        this.tourguide = data as TourGuide;
      }
    })

    this.statisticsService.getStatistics().subscribe({
      next: (data) => {
        //console.log(data);
        this.statistics = data as dashboard;
      },
      error: () => { }
    });

  }
}
