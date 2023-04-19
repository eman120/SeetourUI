import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() photos: string[] = [];
  @Input() showGallery: boolean = false;

  @Output() closed = new EventEmitter();

  closeGallery() {
    this.showGallery = false;
    this.closed.emit();
  }
}
