import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tours-filter',
  templateUrl: './tours-filter.component.html',
  styleUrls: ['./tours-filter.component.css']
})
export class ToursFilterComponent {

  Filter() {
    if (this.filterForm.valid) {
      this.FilterValue.emit(this.filterForm);
    }
  }

  filterForm: FormGroup<any> = new FormGroup({});
  @Output() FilterValue = new EventEmitter<FormGroup>();
  categories: string[] = [];

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    http: HttpClient) {
    http.get(environment.baseUrl+ApiPaths.tour+ApiPaths.tourCategories)
    .subscribe({
      next: (data: any) => {
        this.categories = data;
      }
    })
  }

  ngOnInit(): void {

    let query = this.route.snapshot.queryParams;

    this.filterForm = this.formBuilder.group({
      dateFrom: [query['dateFrom'], Validators.pattern("^\\d{4}-\\d{2}-\\d{2}$")],
      dateTo: [query['dateTo'], Validators.pattern("^\\d{4}-\\d{2}-\\d{2}$")],
      locationFrom: [query['locationFrom'], Validators.minLength(3)],
      locationTo: [query['locationTo'], Validators.minLength(3)],
      priceFrom: [query['priceFrom'], [Validators.min(0), Validators.pattern("^[0-9]*$")]],
      priceTo: [query['priceTo'], [Validators.min(0), Validators.pattern("^[0-9]*$")]],
      capacityFrom: [query['capacityFrom'], [Validators.min(0), Validators.pattern("^[0-9]*$")]],
      capacityTo: [query['capacityTo'], [Validators.min(0), Validators.pattern("^[0-9]*$")]],
      hasSeats: [query['hasSeats'], [Validators.min(0), Validators.pattern("^[0-9]*$")]],
      minRating: [query['minRating'], [Validators.max(5), Validators.min(0), Validators.pattern("^[0-9]*$")]],
      hasTransportaion: [query['hasTransportaion'], [Validators.min(0), Validators.max(1)]],
      tourCategory: [query['tourCategory'] || "Any"]
    })
  }
}
