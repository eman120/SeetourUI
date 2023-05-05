import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToursService } from 'src/app/Services/tours.service';

@Component({
  selector: 'app-tg-tour-details',
  templateUrl: './tg-tour-details.component.html',
  styleUrls: ['./tg-tour-details.component.css']
})
export class TgTourDetailsComponent implements OnInit{
  constructor(
    private toursService: ToursService,
    private titleService:Title,
    private route: ActivatedRoute
    ) {}
    
    tourById:any;
  ngOnInit(): void {
    this.tourById = this.route.snapshot.paramMap.get('id');
  }
}
