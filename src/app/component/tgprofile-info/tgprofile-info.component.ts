import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { TourGuide } from 'src/app/Interfaces/tour-guide';
import { AuthService } from 'src/app/Services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tgprofile-info',
  templateUrl: './tgprofile-info.component.html'
})
export class TGProfileInfoComponent implements OnInit {

  tourGuide: TourGuide | undefined;
  @Output() TGLoaded = new EventEmitter();

  interface: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    auth: AuthService
  ) {
    this.interface = auth.getInterface();
  }

  ngOnInit(): void {
    const tourguideId = this.route.snapshot.paramMap.get('id');
    const urlBase = environment.baseUrl+ApiPaths.tourguide+'/'+tourguideId;

    this.http.get(urlBase).subscribe({
      next: (data) => {
        this.tourGuide = data as TourGuide;
        this.TGLoaded.emit(this.tourGuide);
      },
      error: () => {
        this.router.navigateByUrl('Error');
      }
    });
  }
}
