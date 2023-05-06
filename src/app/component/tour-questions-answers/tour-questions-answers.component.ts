import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { QusesAndAns } from 'src/app/Interfaces/Quse&Answers';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tour-questions-answers',
  templateUrl: './tour-questions-answers.component.html',
  styleUrls: ['./tour-questions-answers.component.css']
})
export class TourQuestionsAnswersComponent implements OnInit {

  constructor(private client:HttpClient) { }
@Input() tourId:any;
answersandQues: QusesAndAns[]=[];
  ngOnInit() {
    this.client.get(environment.baseUrl+ApiPaths.tour+ApiPaths.answersAndQues+'?tourId='+this.tourId).
    subscribe({
      next:(data)=>{
            this.answersandQues= data as QusesAndAns[];
      },
      error:()=>{
        console.log('Error Happened');
      }
    })
  }

}
