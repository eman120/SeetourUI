import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/app/Enums/api-paths';

@Component({
  selector: 'app-dashboard-statistics',
  templateUrl: './dashboard-statistics.component.html',
  styleUrls: ['./dashboard-statistics.component.css']
})
export class DashboardStatisticsComponent implements OnInit {
  // statistics: any;

  // constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    // this.statisticsService.getStatistics().subscribe((data: any) => {
    //   this.statistics = data;
    //});
  }
}
  //https://localhost:7277/api/TourGuide/Get Statistics?id=3c627fe0-d508-4586-b24b-c7812c96edfa

