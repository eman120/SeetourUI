import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { FormGroupQueryService } from 'src/app/Services/form-group-query.service';

@Component({
  selector: 'app-tours-section-filterable',
  templateUrl: './tours-section-filterable.component.html',
  styleUrls: ['./tours-section-filterable.component.css']
})
export class ToursSectionFilterableComponent {
  @Input() tours: TourCard[] | undefined;
  @Input() sectionTitle: string = ""
  @Output() FilterValue = new EventEmitter<FormGroup<any>>();
  @Output() SorterValue = new EventEmitter<any>();

  @ViewChild('FilterClose') FilterClose: ElementRef |undefined;
  @ViewChild('SorterClose') SorterClose: ElementRef |undefined;

  SortingValues: any;

  Filter(data: FormGroup<any>) {
    this.ChangeQueryParams(data);
    this.FilterValue.emit(data);
    this.FilterClose?.nativeElement.click();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.SortTours();
  };

  Sort(data: FormGroup<any>) {
    this.SortingValues = data.value;

    this.ChangeQueryParams(data);
    this.SorterValue.emit(data);

    this.FilterClose?.nativeElement.click();
  }

  private SortTours() {
    this.tours = this._sort();
  }

  _sort() {

    if (!this.SortingValues || !this.tours) {
      return this.tours;
    }

    const SortingOptions = this.SortingValues['SortingOptions'];

    if (!SortingOptions) {
      return this.tours;
    }

    const order = SortingOptions.split('_');
    const keys = SortingOptions.split('_');

    // {label: 'Date From', name: 'SortDateFrom'},
    // {label: 'Date To', name: 'SortDateTo'},
    // {label: 'Price', name: 'SortPrice'},
    // {label: 'Rating', name: 'SortTourGuideRating'},
    // {label: 'Capacity', name: 'SortCapacity'},
    // {label: 'Available Seats', name: 'SortAvailableSeats'}

    for (var i = 0; i < keys.length; i++) {

      keys[i] = (keys[i] as string).substring(4);
      keys[i] = keys[i][0].toLowerCase() + keys[i].substring(1);
    }

    //   if (turn.startsWith('date')) {

    //     //console.log('dating');

    //     this.tours.sort((a, b) => {

    //       let [day, month, year, hour, minute, second] = a[turn].split(/[/: ]/);
    //       const dateA = new Date(+year, +month - 1, +day, +hour, +minute, +second);

    //       [day, month, year, hour, minute, second] = b[turn].split(/[/: ]/);
    //       const dateB = new Date(+year, +month - 1, +day, +hour, +minute, +second);

    //       if (direction == 'Ascending')
    //         return dateA.getTime() - dateB.getTime();
    //       else
    //         return dateB.getTime() - dateA.getTime();
    //       });
    //   }

    //   else if (['price', 'capacity'].includes(turn)) {

    //     //console.log('price & capacity');

    //     this.tours.sort((a, b) => {

    //       if (direction == 'Ascending')
    //         return a[turn] - b[turn];
    //       else
    //         return b[turn] - a[turn];
    //       });
    //   }
    // }

    this.tours.sort((a, b) => {
      let comparison = 0;
      let i = 0;
      while (comparison === 0 && i < keys.length) {


        const key = keys[i];
        const direction = this.SortingValues[order[i]] as string;
        const aValue = a[key];
        const bValue = b[key];

        if (key.startsWith('date')) {

          let [day, month, year, hour, minute, second] = aValue.split(/[/: ]/);
          const dateA = new Date(+year, +month - 1, +day, +hour, +minute, +second);

          [day, month, year, hour, minute, second] = bValue.split(/[/: ]/);
          const dateB = new Date(+year, +month - 1, +day, +hour, +minute, +second);

          if (direction == 'Ascending')
            comparison = dateA.getTime() - dateB.getTime();
          else
            comparison = dateB.getTime() - dateA.getTime();
        }
        else if (['price', 'capacity', 'tourGuideRating'].includes(key)) {
          if (direction == 'Ascending')
            comparison = aValue - bValue;
          else
            comparison = bValue - aValue;
        }
        else if (key == 'availableSeats') {

          if (direction == 'Ascending')
            comparison = (a.capacity - a.bookings) - (b.capacity - b.bookings);
          else
            comparison = (b.capacity - b.bookings) - (a.capacity - a.bookings);
        }

        i++;
      }
      return comparison;
    });

    return this.tours;
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private FGQuery: FormGroupQueryService
  ) {
    activatedRoute.queryParams.subscribe(p => this.SortTours());
  }

  public ChangeQueryParams(data: FormGroup<any>) {

    //const queryParams: Params = this.FGQuery.GetQuery(data);
    let queryObj =  data.value;
    queryObj['tourCategory'] = queryObj['tourCategory'] == 'Any' ? null : queryObj['tourCategory'];

    this.router.navigate([], {
      queryParams: queryObj,
      relativeTo: this.activatedRoute.parent,
      queryParamsHandling: 'merge'
    });
  }
}
