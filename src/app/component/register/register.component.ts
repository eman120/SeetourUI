import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private service: RegisterService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  user: any;
  newReg: any;

  Register(name : any, email : any, phone : any, password :any, snn : any, bankAccount:any , address:any, AccountNumber:any, SwiftCode:any, file:any) {
    if (name && email && phone && password && snn && bankAccount && address && AccountNumber && SwiftCode && file) { // Check if all required fields have data
      this.newReg = { name , email , phone , password , snn , bankAccount , address , AccountNumber , SwiftCode , file };
      console.log('Registration...');
      const registrationDto = {
        UserName: this.newReg.name.replace(/\s+/g, ''),
        Email: this.newReg.email,
        PhoneNumber: this.newReg.phone,
        Password: this.newReg.password,
        SSN: this.newReg.snn,
        RecipientBankNameAndAddress: this.newReg.bankAccount,
        RecipientNameAndAddress: this.newReg.address,
        RecipientAccountNumberOrIBAN: this.newReg.AccountNumber,
        RecipientBankSwiftCode: this.newReg.SwiftCode,
        IDCardPhoto: this.newReg.file,
        profilepic: 'examplepic', //
        FullName: this.newReg.name, //
        SecurityLevel: 'TourGuide',
        TaxRegistrationNumber :"111111"//
      };
      console.log(registrationDto);
      this.http.post('https://localhost:7277/api/User/TourGuideRegistration', registrationDto).subscribe(
        (response) => {
          console.log('Registration successful!');
          console.log(response);
          // Navigate to home component after adding the new Register
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log('Error occurred during registration.');
          console.error(error);
        }
      );
    }
  }

  ngOnInit(): void {
    // ...
  }
}
