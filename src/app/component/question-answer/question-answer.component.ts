import { Component } from '@angular/core';

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
  faqs: Faq[] = [
    {
      question: 'What is Angular?',
      answer: 'Angular is a TypeScript-based open-source front-end web application platform.'
    },
    {
      question: 'What is a component in Angular?',
      answer: 'A component is a building block of an Angular application that consists of a template, styles, and logic.'
    },
    {
      question: 'What is a directive in Angular?',
      answer: 'A directive is a way to attach behavior to elements in the DOM.'
    },
    {
      question: 'What is a service in Angular?',
      answer: 'A service is a singleton object in Angular that can be used to share data and functionality between components.'
    }
  ];
}
