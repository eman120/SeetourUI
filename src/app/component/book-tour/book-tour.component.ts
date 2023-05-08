import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-tour',
  templateUrl: './book-tour.component.html',
  styleUrls: ['./book-tour.component.css']
})
export class BookTourComponent implements OnInit {

  tour: any;
  status:any;

  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const tourId = this.route.snapshot.paramMap.get('id');
    // const url = environment.baseUrl+ApiPaths.tour+ApiPaths.tourdetails+tourId

    // this.http.get(url).subscribe({
    //   next: (data) => {
    //     this.tour = data;
    //     ////console.log(data);
    //   },
    //   error: () => {
    //     //this.router.navigateByUrl('/Error');
    //   }
    // });

    this.http.post(environment.baseUrl + ApiPaths.tour+ApiPaths.bookDetails+'?id='+tourId ,tourId ).subscribe(
      (response) => {
        ////console.log('details successful!');
        this.tour = response;
        ////console.log(this.tour);
      },
      (error) => {
        ////console.log('Error occurred during registration.');
        console.error(error);
        ////console.log(error.status);
        ////console.log(error.statusText);
        ////console.log(error.error);
      }
    );
  }

  book(seatsNum : any){
    // this.toastr.success("I'm a toast!", "Success!");
    const tourId = this.route.snapshot.paramMap.get('id');
    const bookDto = {tourId ,seatsNum };
    this.http.post(environment.baseUrl + ApiPaths.tour+ApiPaths.bookTour+'?id='+tourId +'&seatsNum='+seatsNum, bookDto).subscribe(
      (response) => {
        ////console.log('booked successful!');
        ////console.log(response);
        // this.status = response;
        // Navigate to  component after adding the new Register
        this.router.navigate(['/payment/:' + response.toString() + '' + seatsNum * this.tour.price]);
      },
      (error) => {
        ////console.log('Error occurred during booking.');
        console.error(error);
        ////console.log(error.status);
        ////console.log(error.statusText);
        ////console.log(error.error);
        this.status = error.error;
        this.toastr.error(this.status, 'Error');
      }
    );
  }

}
