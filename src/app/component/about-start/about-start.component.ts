import { Component ,OnInit} from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-about-start',
  templateUrl: './about-start.component.html',
  styleUrls: ['./about-start.component.css']
})
export class AboutStartComponent implements OnInit {


   map: any;

    marker: any;




    ngOnInit() {

      // Define the initMap function globally

      (<any>window).initMap = () => {

        this.initMap();

      };




      // Load the Google Maps API

      const script = document.createElement('script');

      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCJHJ_4hb90K86QL_uBrIy0iRZWNTLBHZE&callback=initMap';

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




      // Add a click event listener to the map

      google.maps.event.addListener(this.map, "click", (event:any) => {

        // Get the latitude and longitude of the clicked location

        const lat = event.latLng.lat();

        const lng = event.latLng.lng();




        // Create the location URL

        const url = "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng;



      });

    }


}
