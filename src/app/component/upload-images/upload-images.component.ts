import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent {
  selectedFiles: File[] = [];
  uploadedUrls: any[] = [];

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
        console.log(result);
        this.uploadedUrls = result;
        // Reset the form after successful upload
        console.log(this.uploadedUrls[0].url);
        this.selectedFiles = [];
      }, (error: any) => {
        console.error(error);
      });
  }
}