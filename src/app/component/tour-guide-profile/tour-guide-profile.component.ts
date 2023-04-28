import { Component } from '@angular/core';
import { TourGuide } from 'src/app/Interfaces/tour-guide';

@Component({
  selector: 'app-tour-guide-profile',
  templateUrl: './tour-guide-profile.component.html'
})
export class TourGuideProfileComponent {

  PassTGInfo(component:any) {
    component['tourGuide'] = this.tourGuide;
  }

  tourGuide: TourGuide | undefined;

  TGLoaded(data: TourGuide) {
    this.tourGuide = data;
  }
}
