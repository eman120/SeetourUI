import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToursService } from 'src/app/Services/tours.service';

@Component({
  selector: 'app-cust-tour-details',
  templateUrl: './cust-tour-details.component.html',
  styleUrls: ['./cust-tour-details.component.css']
})
export class CustTourDetailsComponent {
  constructor(
    private toursService: ToursService,
    private titleService:Title,
    private route: ActivatedRoute
    ) {
    }
    
    tourById:any;
  ngOnInit(): void {
    this.tourById = this.route.snapshot.params["id"];
    console.log(this.tourById);
  }
}
