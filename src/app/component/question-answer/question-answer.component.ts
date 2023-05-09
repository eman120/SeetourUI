import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'jquery';


interface Faq {
  question: string;
  answer: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent {
  faqs:any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('https://localhost:7277/api/TourQuestion/questions-and-answers').subscribe(result => {
      console.log(result);

      this.http.get('https://localhost:7277/api/TourQuestion/questions-and-answers').subscribe(result => {
        //console.log(result);

        this.faqs = result;
      }, error => console.error(error));

    }, error => console.error(error));
  }
}


