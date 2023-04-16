import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  constructor(private http: HttpClient) {}
  onSubmit() {
    const fileInput = document.querySelector('#fileInput') as HTMLInputElement;
    const file = fileInput?.files?.[0];
    if (file) {
      console.log("thd",file);
      const formData = new FormData();
      formData.append('file', file);
      this.http.post('https://localhost:7277/api/AzureImagesURL/UploadImage', formData)
        .subscribe((result: any) => {
          console.log(result);
          // Reset the form after successful upload
          fileInput.value = '';
        }, (error: any) => {
          console.error(error);
        });
    } else {
      console.error('No file selected.');
    }
  }
}