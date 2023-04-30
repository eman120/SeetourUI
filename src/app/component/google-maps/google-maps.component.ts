import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  @Input() firsturl: any;
  @Input() secondurl: any;
  @Input() locationFrom: any;
  @Input() locationTo: any;


  map: any;
  marker: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

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
            // this.firsturlChange.emit(this.firsturl);
            this.locationFrom = results[0].formatted_address;
            // this.locationfromChange.emit(this.locationFrom);
            this.changeDetectorRef.detectChanges(); // update template
          }


          else if (!this.secondurl) {
            this.secondurl = url;
            // this.secondurlChange.emit(this.secondurl);
            this.locationTo = results[0].formatted_address;
            // this.locationtoChange.emit(this.locationTo);
            this.changeDetectorRef.detectChanges(); // update template
          }


        }
      });
    });
  }
}




