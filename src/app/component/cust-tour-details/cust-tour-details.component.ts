import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { ToursService } from 'src/app/Services/tours.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cust-tour-details',
  templateUrl: './cust-tour-details.component.html',
  styleUrls: ['./cust-tour-details.component.css']
})
export class CustTourDetailsComponent implements OnInit{
  askQuestion:FormGroup;
  constructor(
    private toursService: ToursService,
    private titleService:Title,
    private route: ActivatedRoute,
    private http:HttpClient,
    private fb: FormBuilder
    ) {
      this.askQuestion = fb.group({
        question:['']
      })
    }

    tourById:any;
    @Input() tour:any;
    ngOnInit(): void {
      this.tourById = this.route.snapshot.params["id"];
      ////console.log(this.tourById);
    }
    Ask(){
      const questionDto ={
        ...this.askQuestion.value,
        tourId : this.tourById
      };
      this.http.post("https://localhost:7277/api/Tour/AddQuestion", questionDto).subscribe({
        next:()=>{
          ////console.log("thanks for asking us");
        },
        error:()=>{
          ////console.log("noooooooo!!!!!!!!");
          ////console.log(...this.askQuestion.value);
        }
      }
      );
    }
}
