import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TourguidService } from 'src/app/Services/tourguid.service';


@Component({
  selector: 'app-tour-guide',
  templateUrl: './tour-guide.component.html',
  styleUrls: ['./tour-guide.component.css']
})
export class TourGuideComponent implements OnInit {

  constructor(private service:TourguidService, private router: Router) { }

  ngOnInit() {
  }

  tourGuid(file:any,name:any,email:any ,data:any ,capacity:any,locationFrom:any ,locationTo:any,TransportationIncluded:any ,detailedDescription:any){
    if (file && name && email &&  data && capacity && locationTo && locationFrom && TransportationIncluded && detailedDescription)
    { // Check if all required fields have data
      let newReg = {file ,name , email , data,capacity,locationTo,locationFrom ,TransportationIncluded  ,detailedDescription};
      this.service.AddNewTourGuid(newReg).subscribe();
      // Navigate to home component after adding the new Register
      this.router.navigate(['/']);
    }
  }



}
