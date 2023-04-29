import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs';
import { CreatetourService } from 'src/app/Services/createtour.service';
declare var google: any;
@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.css']
})
export class CreateTourComponent implements OnInit {
  createtourform: FormGroup;
  formattedDate: string = '';
  imageurl: string = '';
  @Input() firsturl: any;
  @Input() secondurl: any;
  @Input() locationFrom: any;
  @Input() locationTo: any;
  TourCreated: string = "Tour Created";
  InValidDateFrom = false;
  InValidDateTo = false;
  InValidCancelDate = false;
  DateNow = new Date();
  map: any;
  marker: any;
  Categories: string = "Tour Categories"


  ngOnInit() {
    // Define the initMap function globally
    (<any>window).initMap = () => {
      this.initMap();
    };

    // Load the Google Maps API
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBag-NFxNqdn3CM9L-WvNu8gegaNwHNDgY&callback=initMap';
    document.body.appendChild(script);
  }

  initMap() {
    // Initialize the map
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 12,
    });

    // Add a marker to the map
    this.marker = new google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 },
      map: this.map,
      title: "San Francisco",
    });
    const geocoder = new google.maps.Geocoder();
    // Add a click event listener to the map
    google.maps.event.addListener(this.map, "click", (event: any) => {
      // Get the latitude and longitude of the clicked location
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      // Create the location URL
      const url = "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng;



      // Use the geocoder to get the location name
      geocoder.geocode({ location: { lat, lng } }, (results: any, status: any) => {
        if (status === 'OK' && results[0]) {
          if (!this.firsturl) {
            this.firsturl = url;
            this.locationFrom = results[0].formatted_address;
            this.changeDetectorRef.detectChanges(); // update template
          }


          else if (!this.secondurl) {
            this.secondurl = url;
            this.locationTo = results[0].formatted_address;
            this.changeDetectorRef.detectChanges(); // update template
          }


        }
      });
    });
  }

  //FormControlls
  constructor(private fb: FormBuilder, private datepi: DatePipe, private changeDetectorRef: ChangeDetectorRef, private ClientService: CreatetourService, private router: Router) {
    const imageurlcontrol = new FormControl('', Validators.required);


    this.formattedDate = this.datepi.transform(new Date, 'yyyy-MM-dd HH:mm:ss.SSSSSSS') ?? '';
    this.createtourform = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(100)]],
      transportation: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      capacity: ['', [Validators.required, Validators.min(0)]],
      datefrom: ['', Validators.required, this.DateFromValidator()],
      dateto: ['', Validators.required, this.DateToValidator()],
      duedate: ['', Validators.required, this.CancelDateValidator()],
      description: ['', [Validators.required]],
      category: ['', Validators.required],
      // postedAt: [''],
      imageurl: imageurlcontrol

    });
    // this.createtourform.get('postedAt')?.setValue(this.formattedDate);


  }



  submitForm() {
    // Access the values of the URLs from the parent component and submit them along with the other form data
    const formValue = { ...this.createtourform.value, imageurl: this.imageurl, firsturl: this.firsturl, locationFrom: this.locationFrom, secondurl: this.secondurl, locationTo: this.locationTo };

    console.log('form:', formValue);
    if (formValue) {

      this.ClientService.CreateTour(formValue).subscribe(
        {
          next: () => {
            this.router.navigateByUrl('/tour');
          },
          error: () => {
            this.TourCreated = "No Created Tours"
          }

        });

    }


  }


  //Check for DateFrom Before Creating tour
  //Future & Current Dates are allowed
  private DateFromValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return new Observable((observer: Observer<ValidationErrors | null>) => {
        const datefromm = new Date(control.value);
        datefromm.setHours(23, 59, 59, 999);
        const today = new Date();
        if (datefromm && datefromm < today) {
          this.InValidDateFrom = true;
          // console.log (this.createtourform.get('datefrom')?.value );
          observer.next({ 'InValidDateFrom': true });
        } else {
          this.InValidDateFrom = false;
          observer.next(null);

        }
        observer.complete();
      });
    };
  }

  //Check for DateTo Before Creating tour
  //Future & DateFrom Dates are allowed
  private DateToValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return new Observable((observer: Observer<ValidationErrors | null>) => {
        const datetoo = new Date(control.value);
        datetoo.setHours(23, 59, 59, 900);
        const today = new Date();
        const datefromTracker = new Date(this.createtourform.get('datefrom')?.value);
        // datefromTracker.setHours(0,0,0,0);

        // console.log(this.InValidDateFrom);
        if (datetoo && datefromTracker && datetoo < datefromTracker) {
          this.InValidDateTo = true;
          observer.next({ 'InValidDateTo': true });
        } else {
          this.InValidDateTo = false;
          observer.next(null);

        }
        observer.complete();
      });
    };
  }



  //Check for DateTo Before Creating tour
  //Future & DateFrom Dates are allowed
  private CancelDateValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return new Observable((observer: Observer<ValidationErrors | null>) => {
        const canceldate = new Date(control.value);
        canceldate.setHours(23, 59, 59, 900);
        const today = new Date();
        const datefromTracker = new Date(this.createtourform.get('datefrom')?.value);

        // datefromTracker.setHours(0,0,0,0);

        // console.log(this.InValidDateFrom);
        if (canceldate && datefromTracker && (canceldate > datefromTracker || canceldate > today)) {
          this.InValidCancelDate = true;
          observer.next({ 'InValidCancelDate': true });
        } else {
          this.InValidCancelDate = false;
          observer.next(null);

        }
        observer.complete();
      });
    };
  }

  public get priceValid(): boolean {
    return this.createtourform.controls["price"].valid;
  }
  public get capacityValid(): boolean {
    return this.createtourform.controls["capacity"].valid;
  }
  public get titleValid(): boolean {
    return this.createtourform.controls["title"].valid;
  }
}