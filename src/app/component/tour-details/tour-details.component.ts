import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { TourDet } from 'src/app/Interfaces/tour-det';
import { ToursService } from 'src/app/Services/tours.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  // /*@Input()*/ tour: TourCard | undefined;
  // get tourLink(): string {
  //   console.log(this.tour);
  //   return this.tour ? `/tour/${this.tour.id}` : '#';
  // }

  tour: any;
  question:any;
  dateFrom:any;
  tourAnswer:any;
  loading = true;
  checkForTour :any;

  Photos: any[]=[];
  @Input() tourById :number | undefined;

  constructor(
    private toursService: ToursService,
    private titleService:Title,
    private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      // const tourById = this.route.snapshot.paramMap.get('id');
      console.log(this.tourById);
      this.toursService.GetTourById(this.tourById ? this.tourById.toString() : "").subscribe({
        next: (data) => {
          this.tour = data as TourDet;
          this.checkForTour = this.tour.dateTo < new Date();
          console.log(this.tour);
          this.loading = false;
        },
        error: () => { }
      });

      // this.Photos=this.Photos.map(photo=>{
      //   return {
      //     id:0,
      //     url:"",
      //     photoId:photo.id,
      //     tourId:this.tourById
          
      //   };
      // });
    }


  // submitForm() {
  //   // iterate over the questions and answers and send a separate request for each
  //   for (let i = 0; i < this.tour.questions.length; i++) {
  //     const question = this.tour.questions[i].question;
  //     const answer = this.tourAnswer[i];

  //     // send the question-answer pair to the API endpoint
  //     this.http.post('https://localhost:7277/api/TourAnswer', { question, answer }).subscribe(response => {
  //       console.log('Answer submitted successfully');
  //     }, error => {
  //       console.error('Error submitting answer: ', error);
  //     });
  //   }
  // }

}
