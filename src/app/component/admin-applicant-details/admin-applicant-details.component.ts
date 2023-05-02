import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TGStatus } from 'src/app/Enums/tgstatus';
import { TourGuideDetails } from 'src/app/Interfaces/tour-guide-details';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-applicant-details',
  templateUrl: './admin-applicant-details.component.html',
  styleUrls: ['./admin-applicant-details.component.css']
})
export class AdminApplicantDetailsComponent {
  tourguide: TourGuideDetails|undefined;
  formStatus: string = "Pending";

  constructor(private route: ActivatedRoute,
    private admin: AdminService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const Id = this.route.snapshot.paramMap.get('id');
    this.admin.GetApplicant(Id??"").subscribe({
      next: (data) => {
        this.tourguide = data as TourGuideDetails;
      }
    })
  }

  OnAccept() {
    this.formStatus = "Posted";
    this.ChangeTourGuideStatus(TGStatus.Accepted);
  }

  private ChangeTourGuideStatus(Status: TGStatus) {
    this.admin.ChangeTourGuideStatus(this.tourguide?.id ?? "", Status).subscribe({
      next: () => {
        this.formStatus = "Success";
      },
      error: () => {
        this.formStatus = "Error";
      }
    });
  }

  OnReject() {
    this.formStatus = "Posted";
    this.ChangeTourGuideStatus(TGStatus.Rejected);
  }
}
