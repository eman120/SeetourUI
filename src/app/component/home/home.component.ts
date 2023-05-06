import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  interface: string;

  constructor(titleService:Title, auth: AuthService) {
    titleService.setTitle("Seetour")
    this.interface = auth.getInterface()
  }
}
