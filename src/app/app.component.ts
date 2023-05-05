import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }
  user :any;
  title = 'projFront';

  spinner(): void {
    setTimeout(() => {
      const spinnerElement = document.getElementById('spinner');
      if (spinnerElement) {
        spinnerElement.classList.remove('show');
      }
    }, 1);
  }

  onBackToTopClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.spinner();
    $('.back-to-top').css('display', 'none');
    this.user = this.authService.getInterface();
    // console.log(this.user);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe({
        next: () => {
          this.user = this.authService.getInterface();
        }
      })
  }

    // this.http.get(`https://localhost:7277/api/User/GetUser?username=eman`).subscribe(data => {
    // this.user = data;
    // console.log(data);
    // });

}
