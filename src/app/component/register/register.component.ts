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

  Register(name:any, email:any, phone:any , bankAccount:any , password:any){
    if (name && email && phone  && bankAccount && password)
    { // Check if all required fields have data
      let newReg = {name , email , phone , bankAccount , password};
      this.service.AddNewRegister(newReg).subscribe();
      // Navigate to home component after adding the new Register
      this.router.navigate(['/']);
    }
  }
}
