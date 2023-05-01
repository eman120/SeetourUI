import { Component } from '@angular/core';
import { TourGuide } from 'src/app/Interfaces/tour-guide';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-accept-tour-guides',
  templateUrl: './admin-accept-tour-guides.component.html',
  styleUrls: ['./admin-accept-tour-guides.component.css']
})
export class AdminAcceptTourGuidesComponent {
  tourguides: TourGuide[]|undefined;

  constructor(private admin: AdminService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.admin.GetApplicants().subscribe({
      next: (data) => {
        this.tourguides = data as TourGuide[];
        console.log(this.tourguides);
      }
    })
  }
}
