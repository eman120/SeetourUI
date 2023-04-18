import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service:RegisterService, private router: Router){}

  Register(name:any, email:any, phone:any , address:any,snn : any ,SwiftCode:any, bankAccount:any , AccountNumber:any , password:any){
    if (name && email && phone && snn  &&  password && address && bankAccount && SwiftCode && AccountNumber)
    { // Check if all required fields have data
      let newReg = {name , email , phone , snn ,password,address,bankAccount ,SwiftCode  ,AccountNumber};
      this.service.AddNewRegister(newReg).subscribe();
      // Navigate to home component after adding the new Register
      this.router.navigate(['/']);
    }
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    // Do something with the file, e.g. upload it to a server
  }
}
