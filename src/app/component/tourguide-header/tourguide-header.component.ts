import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TourGuide } from 'src/app/Interfaces/tour-guide';
import { AuthService } from 'src/app/Services/auth.service';
import { TourguidService } from 'src/app/Services/tourguid.service';

@Component({
  selector: 'app-tourguide-header',
  templateUrl: './tourguide-header.component.html',
  styleUrls: ['./tourguide-header.component.css']
})
export class TourguideHeaderComponent {
  tourguide: TourGuide | undefined;

  constructor(private tourguideService: TourguidService, private auth: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tourguideService.GetCurrentTourGuideInfo().subscribe({
      next: (data) => {
        this.tourguide = data as TourGuide;
      }
    })
  }

  logout(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
