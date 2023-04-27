import { Component } from '@angular/core';
import { TourGuide } from 'src/app/Interfaces/tour-guide';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-tour-guide-profile',
  templateUrl: './tour-guide-profile.component.html',
  styleUrls: ['./tour-guide-profile.component.css']
})
export class TourGuideProfileComponent {

  PassTGInfo(component:any) {
    component['tourGuide'] = this.tourGuide;
  }

  tourGuide: TourGuide | undefined;

  constructor(
    private titleService:Title
  ) { }

  TGLoaded(data: TourGuide) {
    this.tourGuide = data;
    this.titleService.setTitle("Seetour - " + this.tourGuide.name);
  }
}
