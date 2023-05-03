import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/Services/customer.service';
import { ImageCompressorOutput } from '../upload-images-v2/upload-images-v2.component';

@Component({
  selector: 'app-customer-review-form',
  templateUrl: './customer-review-form.component.html',
  styleUrls: ['./customer-review-form.component.css']
})
export class CustomerReviewFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private customer: CustomerService) { }

  public _bookedtourId: number|undefined;

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
  }

  review:string = "";
  photos:FormData = new FormData();

  photoUrls: {compressedImage:string, fileName:string}[] =[];

  formstatus: string = "pending";

  fomrValidation: FormGroup<any> = new FormGroup([]);

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

    data.uploaded.forEach(file => {
      if (this.photos.get(file.fileName) == null)
        this.photoUrls.push(file)
    })

    data.formData.forEach((file, key) => {
      if (file instanceof File && this.photos.get(key) == null) {
        this.photos.append(key, file, key);
      }
    });

    this.formstatus = 'pending';
  }

  RemoveImage(key: string) {
    this.photos.delete(key);
    this.photoUrls.splice(this.photoUrls.findIndex(p => p.fileName == key), 1);
  }

  OnReview() {

    if (this.fomrValidation.valid) {
      this.formstatus = "posted";
      //this.PostRequest(this.GenerateRequest(PostingStatus.EditRequested, this.review));
    }
    else {
      this.formstatus = "invalid"
    }
    console.log(this.formstatus)
    console.log(this.fomrValidation)
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
