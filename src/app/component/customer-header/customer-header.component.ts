import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent {

  constructor (private auth: AuthService, private form: FormBuilder,
    private router: Router, route: ActivatedRoute) {

    route.queryParams.subscribe({
      next: (data) => {
        const query = data['query'] as string;

        this.searchForm = this.form.group({
          'query': [query, Validators.minLength(3)]
        })
      }
    });
  }

  logout(){
    this.auth.logout();
  }

  searchForm!: FormGroup<any>;

  Search() {
    if (!this.searchForm.valid) return;

    this.router.navigate(['tour'], {
      queryParams: this.searchForm.value,
      queryParamsHandling: 'merge'
    })
  }
}
