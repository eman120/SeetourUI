import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TourCard } from 'src/app/Interfaces/tour-card';
import { TourGuide } from 'src/app/Interfaces/tour-guide';

@Component({
  selector: 'app-tours-section-filterable',
  templateUrl: './tours-section-filterable.component.html',
  styleUrls: ['./tours-section-filterable.component.css']
})
export class ToursSectionFilterableComponent {
  @Input() tours: TourCard[] | undefined;
  @Input() title: string = ""
  @Output() FilterValue = new EventEmitter();

  Filter(data: any) {
    this.FilterValue.emit(data);
  }
}
