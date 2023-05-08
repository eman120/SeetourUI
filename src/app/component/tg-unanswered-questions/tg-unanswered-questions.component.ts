import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TourguidService } from './../../Services/tourguid.service';
import { Component } from '@angular/core';
import { TourGuide } from 'src/app/Interfaces/tour-guide';
import { tgquestions } from 'src/app/Interfaces/unansweredques';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tg-unanswered-questions',
  templateUrl: './tg-unanswered-questions.component.html',
  styleUrls: ['./tg-unanswered-questions.component.css']
})
export class TgUnansweredQuestionsComponent {
  flag:any;
  message: string|undefined;
  QuestionAnswer:FormGroup;
  unanswersandQues: tgquestions[] = [];
  constructor(private service: TourguidService, private fb: FormBuilder, private router: Router) {
    this.QuestionAnswer = fb.group({
      answer:['',Validators.required]
    })
  }

  
  ngOnInit() {
    this.service.GetAllUnAnsweredQuestions().
      subscribe({
        next: (data) => {
          this.unanswersandQues = data as tgquestions[];
         
        },
        error: () => {
          this.router.navigateByUrl('Error');
        }
      })
  }

  Answer(qID:any){
    const questionDto ={
      ...this.QuestionAnswer.value, 
      tourQuestionId : qID
    };
    this.service.PostAnswerForSepcifiecQues(questionDto).subscribe({
      next:()=>{
        this.message = 'Answer submitted successfully!';
        console.log("thanks for asking us");
        console.log(questionDto);
        this.flag=true;
      },
      error:()=>{
        this.router.navigateByUrl('Error');
       
      }
    }
    );
  }

}
