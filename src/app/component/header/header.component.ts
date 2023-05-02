import { Component, Input} from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() user: string ="";
  constructor (private auth: AuthService) {}

  logout(){
    this.auth.logout();
  }
}

