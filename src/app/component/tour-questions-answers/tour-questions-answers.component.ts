import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { QusesAndAns } from 'src/app/Interfaces/Quse&Answers';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tour-questions-answers',
  templateUrl: './tour-questions-answers.component.html',
  styleUrls: ['./tour-questions-answers.component.css']
})
export class TourQuestionsAnswersComponent implements OnInit {

  constructor(private client:HttpClient,private route: ActivatedRoute) { }
tourId:any;
answersandQues: QusesAndAns[]=[];
  ngOnInit() {
    this.tourId = this.route.snapshot.params["id"];
    this.client.get(environment.baseUrl+ApiPaths.tour+ApiPaths.answersAndQues+'?tourId='+this.tourId).
    subscribe({
      next:(data)=>{
            this.answersandQues= data as QusesAndAns[];
            console.log(this.answersandQues);
      },
      error:()=>{
        console.log('Error Happened');
        console.log(this.answersandQues);
        
      }
    })
  }

}
