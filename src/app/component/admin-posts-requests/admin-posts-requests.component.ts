import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-posts-requests',
  templateUrl: './admin-posts-requests.component.html',
  styleUrls: ['./admin-posts-requests.component.css']
})
export class AdminPostsRequestsComponent implements OnInit {

  tours: TourCard[] | undefined;

  constructor(private adminService: AdminService, titleService:Title ) {
    titleService.setTitle("Seetour - Pending Posts")
  }

  ngOnInit(): void {
    this.adminService.GetTourRequests().subscribe({
      next: (data) => {
        this.tours = data as TourCard[];
      }
    })
  }
}
