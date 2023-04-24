import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  tour: any;
  question:any;
  dateFrom:any;
  tourAnswer:any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const tourId = this.route.snapshot.paramMap.get('id');

    this.http.get(`https://localhost:7277/api/Tour/GetById?id=1`).subscribe(data => {
    this.tour = data;
    console.log(data);
    });
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
