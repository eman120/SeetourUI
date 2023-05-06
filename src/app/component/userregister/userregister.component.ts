import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
 import {UserregisterService } from 'src/app/Services/userregister.service';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit{
  constructor(private service:UserregisterService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  UserPhoto : any;
  user: any;
  newReg: any;

  UserRegister(username:any , name:any, email:any, phone:any, password:any, snn:any){
    if (username && name && email && phone  && password && snn)
    { // Check if all required fields have data
      this.newReg = {username  ,name , email , phone , password ,snn};
      
      const registrationDto = {
        userName: this.newReg.username.replace(/\s+/g, ''),
        password: this.newReg.password,
        profilepic: this.UserPhoto,
        ssn: this.newReg.snn,
        fullName: this.newReg.name,
        phoneNumber: this.newReg.phone,
        email: this.newReg.email
      };
      console.log(registrationDto);
      // this.service.AddNewRegister(registrationDto).subscribe();
      this.http.post(environment.baseUrl + ApiPaths.user+ApiPaths.custReg, registrationDto).subscribe(
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
