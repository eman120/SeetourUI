import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
 import {UserregisterService } from 'src/app/Services/userregister.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit{
  constructor(private service:UserregisterService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }


  user: any;
  newReg: any;

  UserRegister(file:any,name:any, email:any, phone:any , snn:any , password:any){
    if (file && name && email && phone  && snn && password)
    { // Check if all required fields have data
      let newReg = {file ,name , email , phone , snn , password};
      this.service.AddNewRegister(newReg).subscribe();

      const registrationDto = {
        UserName: this.newReg.name,
        SecurityLevel: '',
        SSN: this.newReg.snn,
        Email: this.newReg.email,
        PhoneNumber: this.newReg.phone,
        Password: this.newReg.password,
        IDCardPhoto: this.newReg.file
      };
      this.http.post('https://localhost:44362/api/User/Registration', registrationDto).subscribe(
        (response) => {
          console.log('Registration successful!');
          console.log(response);
          // Navigate to home component after adding the new Register
          this.router.navigate(['/']);
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
