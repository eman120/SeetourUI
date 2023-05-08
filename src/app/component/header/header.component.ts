import { Component, Input} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (private form: FormBuilder,
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

  searchForm!: FormGroup<any>;

  Search() {
    if (!this.searchForm.valid) return;

    this.router.navigate(['tour'], {
      queryParams: this.searchForm.value,
      queryParamsHandling: 'merge'
    })
  }
}

