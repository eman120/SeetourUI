import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dashboard } from 'src/app/Interfaces/dashboard';
import { DashboardstatisticsService } from 'src/app/Services/dashboardstatistics.service';

@Component({
  selector: 'app-tourguide-dashboard',
  templateUrl: './tourguide-dashboard.component.html',
  styleUrls: ['./tourguide-dashboard.component.css']
})
export class TourguideDashboardComponent implements OnInit{
  statistics : any;
  constructor(private statisticsService: DashboardstatisticsService) { }

  ngOnInit(): void {
    this.statisticsService.getStatistics().subscribe({
      next: (data) => {
        console.log(data);
        this.statistics = data as dashboard;
      },
      error: () => { }
    });
  }
}
