import { ImagesService } from './../../Services/images.service';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  Tours:any;
  /**
   *
   */
  constructor( private myService:ImagesService) {}
  ngOnInit(): void {
    this.myService.GetAllTours().subscribe(
      {
        next:(data)=>{
          this.Tours=data;
        },
        error:(err)=>{console.log(err)}
      }
    )
  }

  // constructor(myActivated:ActivatedRoute , private myService:ImagesService) {
  //   this.myurl=myActivated.snapshot.params["url"];
  // }
  // ngOnInit(): void {
  //   this.myService.GetImageByUrl(this.myurl).subscribe({
  //     next:(data)=>{
  //       this.image=data;
  //     },
  //     error:(err)=>{console.log(err)},
  //   })
  // }

}
