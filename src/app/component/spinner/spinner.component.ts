import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="d-flex justify-content-center align-items-center">
      <div class="spinner-border text-success"
        role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `
})
export class SpinnerComponent {

}
