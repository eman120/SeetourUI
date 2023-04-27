import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/app/Enums/api-paths';

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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const tourId = this.route.snapshot.paramMap.get('id');
    const url = environment.baseUrl+ApiPaths.tour+ApiPaths.tourdetails+tourId

    this.http.get(url).subscribe({
      next: (data) => {
        this.tour = data;
      },
      error: () => {
        //this.router.navigateByUrl('/Error');
      }
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
