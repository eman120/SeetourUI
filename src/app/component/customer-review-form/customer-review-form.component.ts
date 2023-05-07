import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/Services/customer.service';
import { ImageCompressorOutput } from '../compress-images-button/compress-images-button.component';
import { ReviewDto } from 'src/app/Interfaces/review-dto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-review-form',
  templateUrl: './customer-review-form.component.html',
  styleUrls: ['./customer-review-form.component.css']
})
export class CustomerReviewFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private customer: CustomerService, private readonly http:HttpClient) { }

  public _bookedtourId: number|undefined;

  @Output() Reviewed: EventEmitter<void> = new EventEmitter;

  @Input() TourTitle: string = "";

  @Input() set tourId(value: number) {
    this.customer.GetBookedTourIdToReview(value).subscribe({
      next: (data) => {
        this._bookedtourId = data as number;
      }
    })
  }

  @Input() set bookedtourId(value: number|undefined) {

    this._bookedtourId = value;

    this.fomrValidation.reset();
    this.formstatus='pending'
  }

  review:string = "";

  formstatus: string = "pending";

  fomrValidation: FormGroup<any> = new FormGroup([]);

  photos: string[] = [];

  ngOnInit(): void {

    this.fomrValidation = this.fb.group({
      reviewBody: ['', [Validators.required, Validators.minLength(32), Validators.maxLength(512)]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    })
  }

  imagesCompressing() {
    this.formstatus = 'hold';
  }

  ImagesSelected(data: ImageCompressorOutput) {

    this.photos = [];

    data.uploaded.forEach((photo) => {this.photos.push(photo.compressedImage)});

    ////console.log(this.photos);

    this.formstatus = 'pending';
  }

  OnReview() {

    if (this._bookedtourId && this.fomrValidation.valid) {

      this.formstatus = "posted";

      const reviewDto: ReviewDto = {
        bookedTourId: this._bookedtourId,
        rating: this.fomrValidation.value['rating'] as number,
        reviewBody: this.fomrValidation.value['reviewBody'] as string,
        Base64Images: this.photos
      }

      this.customer.PostBookedTourReview(reviewDto).subscribe({
        next: () => {
          this.formstatus = "success";

          this.photos = [];
          this.fomrValidation.reset();

          this.Reviewed.emit();
        },
        error: () => {
          this.formstatus = "error";
        }
      })
    }
    else {
      this.formstatus = "invalid"
    }
  }
}
