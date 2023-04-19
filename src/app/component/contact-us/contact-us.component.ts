import { Component } from '@angular/core';
import { Router } from '@angular/router';
 import {ContactService } from 'src/app/Services/contact.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private service:ContactService, private router: Router){}

  contactUs(name:any, email:any, message:any , subject:any){
    if (name && email && message  && subject)
    { // Check if all required fields have data
      let newReg = {name , email , message , subject };
      this.service.AddNewMessage(newReg).subscribe();
      // Navigate to home component after adding the new Register
      this.router.navigate(['/']);
    }
  }
}
