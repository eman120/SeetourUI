import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';
import {AdminPostStatus} from 'src/app/Interfaces/admin-post-status'
import { PostingStatus } from 'src/app/Enums/posting-status';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-post-request-form',
  templateUrl: './admin-post-request-form.component.html',
  styleUrls: ['./admin-post-request-form.component.css']
})
export class AdminPostRequestFormComponent implements OnInit {

  constructor(auth: AuthService,
    private adminService: AdminService,
    private fb:FormBuilder) {
    this.interface = auth.getInterface();
  }

  interface: string = ""
  @Input() tourId: number|undefined;
  request:string = "";
  formstatus: string = "pending";
  pending = false;

  formValidation: FormGroup<any> = new FormGroup([]);

  ngOnInit(): void {
    this.formValidation = this.fb.group({
      editRequest: ['', [Validators.required, Validators.minLength(64), Validators.maxLength(256)]]
    })

    this.adminService.isPostPending(this.tourId).subscribe({
      next: () => {
        this.pending = true;
      },
      error: () => {
        this.pending = false;
      }
    })
  }

  get isAdmin() { return this.interface == "admin" }

  onAccept() {
    this.formstatus = "posted";

    this.PostRequest(this.GenerateRequest(PostingStatus.Accepted));
  }

  private GenerateRequest(status: PostingStatus, request: string = ""): AdminPostStatus {
    return {
      TourId: this.tourId??0,
      Status: status,
      EditRequest: request
    };
  }

  onReject() {
    this.formstatus = "posted";

    this.PostRequest(this.GenerateRequest(PostingStatus.Rejected));
  }

  onRequestEdit() {

    if (this.formValidation.valid) {
      this.formstatus = "posted";
      this.PostRequest(this.GenerateRequest(PostingStatus.EditRequested, this.formValidation.value['editRequest']));
    }
    else {
      this.formstatus = "invalid"
    }
  }

  private PostRequest(request: AdminPostStatus) {
    this.adminService.PostEditRequest(request).subscribe({
      next: () => {
        this.formstatus = "success";
        this.formValidation.reset();
        this.pending = false;
      },
      error: () => {
        this.formstatus = "error";
      }
    });
  }
}
