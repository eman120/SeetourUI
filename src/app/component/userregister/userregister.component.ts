import { Component } from '@angular/core';
import { Router } from '@angular/router';
 import {UserregisterService } from 'src/app/Services/userregister.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {
  constructor(private service:UserregisterService, private router: Router){}

  UserRegister(name:any, email:any, phone:any , snn:any , password:any){
    if (name && email && phone  && snn && password)
    { // Check if all required fields have data
      let newReg = {name , email , phone , snn , password};
      this.service.AddNewRegister(newReg).subscribe();
      // Navigate to home component after adding the new Register
      this.router.navigate(['/']);
    }
  }
}
