import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
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
  @Input() title: string = ""
  @Output() FilterValue = new EventEmitter();

  @ViewChild('FilterClose') FilterClose: ElementRef |undefined;

  Filter(data: any) {
    this.ChangeQueryParams(data);
    this.FilterValue.emit(data);
    this.FilterClose?.nativeElement.click();
  }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private FGQuery: FormGroupQueryService
  ) {
  }

  public ChangeQueryParams(data:any) {
    const queryParams: Params = this.FGQuery.GetQuery(data);

    this.router.navigate([], {
      queryParams: queryParams,
      relativeTo: this.activatedRoute.parent
    });
  }
}
