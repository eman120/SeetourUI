import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer-review-form',
  templateUrl: './customer-review-form.component.html',
  styleUrls: ['./customer-review-form.component.css']
})
export class CustomerReviewFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private customer: CustomerService) {
  }

  public _bookedtourId: number|undefined;

  @Input() TourTitle: string = "";

  @Input() set tourId(value: number) {
    this.customer.GetBookedTourIdToReview(value).subscribe({
      next: (data) => {
        console.log(data)
        this._bookedtourId = data as number;
      }
    })
  }

  @Input() set bookedtourId(value: number|undefined) {
    this._bookedtourId = value;
    this.fomrValidation.reset();
  }

  review:string = "";
  formstatus: string = "pending";

  fomrValidation: FormGroup<any> = new FormGroup([]);

  ngOnInit(): void {

    this.fomrValidation = this.fb.group({
      reviewBody: ['', [Validators.required, Validators.minLength(32), Validators.maxLength(512)]]
    })

  }

  OnReview() {

    if (this.fomrValidation.valid) {
      this.formstatus = "posted";
      //this.PostRequest(this.GenerateRequest(PostingStatus.EditRequested, this.review));
    }
    else {
      this.formstatus = "invalid"
    }
  }

  // private PostRequest(request: AdminPostStatus) {
  //   this.adminService.PostEditRequest(request).subscribe({
  //     next: () => {
  //       this.formstatus = "success";
  //       this.review = "";
  //     },
  //     error: () => {
  //       this.formstatus = "error";
  //     }
  //   });
  // }
}
