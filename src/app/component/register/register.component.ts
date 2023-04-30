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

  Register(file: any, name: any, email: any, phone: any, address: any, snn: any, SwiftCode: any, bankAccount: any, AccountNumber: any, password: any) {
    if (file && name && email && phone && snn && password && address && bankAccount && SwiftCode && AccountNumber) { // Check if all required fields have data
      this.newReg = { file, name, email, phone, snn, password, address, bankAccount, SwiftCode, AccountNumber };
      console.log('Registration...');
      const registrationDto = {
        UserName: this.newReg.name,
        SecurityLevel: 'tourguide',
        profilepic: 'examplepic', //
        SSN: this.newReg.snn,
        FullName: this.newReg.name, //
        Email: this.newReg.email,
        PhoneNumber: this.newReg.phone,
        Password: this.newReg.password,
        RecipientAccountNumberOrIBAN: this.newReg.AccountNumber,
        RecipientBankNameAndAddress: this.newReg.bankAccount,
        RecipientBankSwiftCode: this.newReg.SwiftCode,
        RecipientNameAndAddress: this.newReg.address,
        IDCardPhoto: this.newReg.file
      };
      this.http.post('https://localhost:44362/api/User/TourGuideRegistration', registrationDto).subscribe(
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
