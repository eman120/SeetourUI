import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToursService } from 'src/app/Services/tours.service';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/app/Enums/api-paths';

@Component({
  selector: 'app-tg-tour-details',
  templateUrl: './tg-tour-details.component.html',
  styleUrls: ['./tg-tour-details.component.css']
})
export class TgTourDetailsComponent implements OnInit{
  constructor(
    private toursService: ToursService,
    private titleService:Title,
    private route: ActivatedRoute,
    private http: HttpClient
    ) {}

  Photos: any[]=[];
  tourById:any;
  tour:any;
  checkForTour:any;
  // flag = this.Photos.length > 0;

  ngOnInit(): void {
    this.tourById = this.route.snapshot.paramMap.get('id');
    this.checkForTour =this.tour? this.tour.dateTo < new Date():0;
  }

  get isFormValid(): boolean {
    return !!this.Photos;
  }

  onSubmit(){
    const requestBody = {
      tourid: Number(this.tourById),
      photoDtos: this.Photos
    };
    this.http.post(environment.baseUrl+ "" + ApiPaths.tour + ApiPaths.pics, this.Photos).subscribe(
      response => {
        //console.log('Answer submitted successfully');
        //console.log(this.Photos);
        this.Photos = [];
      }, error => {
        //console.log('Error occurred during uploading.');
        console.error(error);
        //console.log(error.status);
        //console.log(error.statusText);
        //console.log(error.error);
        //console.log(this.Photos);
      });
  }
}
