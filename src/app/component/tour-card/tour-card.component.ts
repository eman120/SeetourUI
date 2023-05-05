import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent implements  OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }
  user :any;
  @Input() tour: TourCard | undefined;
  
  ngOnInit(): void {
    this.user = this.authService.getInterface();
  }
  get tourLink(): string {
    if(this.user === 'TourGuide'){
      return this.tour ? `/tour/${this.tour.id}` : '#';
    }
    return this.tour ? `/custdetails/${this.tour.id}` : '#';
  }
  get tourguideLink(): string {
    return this.tour? `/tourguide/${this.tour.tourGuideId}` : '#';
  }
}
