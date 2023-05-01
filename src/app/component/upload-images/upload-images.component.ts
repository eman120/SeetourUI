import { Component, EventEmitter,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent {
  selectedFiles: File[] = [];
  uploadedUrls: any[] = [];
  @Output() imagesUrls = new EventEmitter<any>();
  tourPhoto:any[]=[];

  constructor(private http: HttpClient) {}

  onSelect(event: any) {
    this.selectedFiles = event.target.files;
  }

  onSubmit() {
    const formData = new FormData();
    for (const file of this.selectedFiles) {
      formData.append('files', file, file.name);
    }

    this.http.post('https://localhost:7277/api/AzureImagesURL/UploadImages', formData)
      .subscribe((result: any) => {
       // console.log(result);
        this.uploadedUrls = result;

        //Mapping the array to TourPhoto array
        this.tourPhoto=this.uploadedUrls.map(photo=>{
          return {
            id:0,
            photoId:photo.id,
            tourId:0
            
          };
        });
        this.imagesUrls.emit(this.tourPhoto);
       // console.log(this.uploadedUrls);
       // console.log(this.tourPhoto);

        // Reset the form after successful upload
       // console.log(this.uploadedUrls[0].url);
        this.selectedFiles = [];
      }, (error: any) => {
        console.error(error);
      });
  }
}