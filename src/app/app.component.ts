import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
  }
}
