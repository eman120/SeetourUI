import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { jqxSortableComponent } from 'jqwidgets-ng/jqxsortable';

type SorterEntry = {
  label: string;
  name: string;
};

@Component({
  selector: 'app-tours-sorter',
  templateUrl: './tours-sorter.component.html',
  styleUrls: ['./tours-sorter.component.css']
})
export class ToursSorterComponent {

  Sort() {
    if (this.sorterForm.valid) {

      let sortObj = Object.create(this.sorterForm.value);

      let sortingOptions = Array(this.items.length).join('.').split('.');

      for (const item of this.items) {

        if (!this.sorterForm.value[item.name] || this.sorterForm.value[item.name] == 'Default') {
          sortObj[item.name] = null;
        }
        else {
          sortObj[item.name] = this.sorterForm.value[item.name];
          const index = $( 'jqxsortable>div>div' ).index( $('#'+item.name) )

          if (index != -1) {
            sortingOptions[index] = (item.name);
          }
          else {
            sortingOptions.push(item.name);
          }
        }
      }

      sortObj['SortingOptions'] = sortingOptions.filter(t => t).join('_') || null;

      this.sorterForm.setValue(sortObj);

      this.SorterValue.emit(this.sorterForm);
      console.log(sortObj)
    }
  }

  @ViewChild('sortingOptions') mySortable!: jqxSortableComponent;

  items: SorterEntry[] = [
    {label: 'Date From', name: 'SortDateFrom'},
    {label: 'Date To', name: 'SortDateTo'},
    {label: 'Price', name: 'SortPrice'},
    {label: 'Rating', name: 'SortTourGuideRating'},
    {label: 'Capacity', name: 'SortCapacity'},
    {label: 'Available Seats', name: 'SortAvailableSeats'}
  ];

  sorterForm: FormGroup<any> = new FormGroup({});
  @Output() SorterValue = new EventEmitter<FormGroup<any>>();
  categories: string[] = [];



  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    let query = this.route.snapshot.queryParams;

    const SortingOptions = query['SortingOptions'] as string;

    if (SortingOptions) {

      const order = SortingOptions.split('_');
      const temp: SorterEntry[] = [];

      for (var turn of order) {

        let index = this.items.findIndex(t => t.name == turn);

        if (index) {
          temp.push(this.items[index]);
          this.items.splice(index,1);
        }

      }

      temp.push(...this.items);
      this.items = temp;
    }


    this.sorterForm = this.formBuilder.group({
      SortingOptions: [SortingOptions]
    });

    for (const item of this.items) {

      let value = null;
      if (query[item.name]) value = query[item.name] as string;

      this.sorterForm.addControl(item.name, this.formBuilder.control(value));
    }

    this.Sort();
  }
}
