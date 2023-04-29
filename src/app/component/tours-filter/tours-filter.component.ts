import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  @Output() FilterValue = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.filterForm = this.formBuilder.group({
      dateFrom: [null, Validators.pattern("^\\d{4}-\\d{2}-\\d{2}$")],
      dateTo: [null, Validators.pattern("^\\d{4}-\\d{2}-\\d{2}$")],
      locationFrom: [null, Validators.minLength(3)],
      locationTo: [null, Validators.minLength(3)],
      priceFrom: [null, [Validators.min(0), Validators.pattern("^[0-9]*$")]],
      priceTo: [null, [Validators.min(0), Validators.pattern("^[0-9]*$")]],
      capacityFrom: [null, [Validators.min(0), Validators.pattern("^[0-9]*$")]],
      capacityTo: [null, [Validators.min(0), Validators.pattern("^[0-9]*$")]],
      hasSeats: [null, [Validators.min(0), Validators.pattern("^[0-9]*$")]],
      minRating: [null, [Validators.max(5), Validators.min(0), Validators.pattern("^[0-9]*$")]]
    })
  }
}
