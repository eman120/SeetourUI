import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
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


  map: any;
  marker: any;


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

  constructor(private fb: FormBuilder, private datepi: DatePipe, private changeDetectorRef: ChangeDetectorRef) {
    const imageurlcontrol = new FormControl('', Validators.required);


    this.formattedDate = this.datepi.transform(new Date, 'yyyy-MM-dd HH:mm:ss.SSSSSSS') ?? '';
    this.createtourform = this.fb.group({
      transportation: ['', Validators.required],
      price: ['', Validators.required],
      capacity: ['', Validators.required],
      datefrom: ['', Validators.required],
      dateto: ['', Validators.required],
      duedate: ['', Validators.required],
      description: ['', Validators.required],
      postedAt: [''],
      imageurl: imageurlcontrol

    });
    this.createtourform.get('postedAt')?.setValue(this.formattedDate);


  }

  submitForm() {
    // Access the values of the URLs from the parent component and submit them along with the other form data
    const formValue = { ...this.createtourform.value, imageurl: this.imageurl,firsturl: this.firsturl, locationFrom:this.locationFrom,secondurl:this.secondurl ,locationTo:this.locationTo};
    console.log('form:', formValue);
  }


}