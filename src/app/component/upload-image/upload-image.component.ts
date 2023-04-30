import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: []
})
export class UploadImageComponent {
  @Output() imageUrl = new EventEmitter<string>();
   fileInput = document.querySelector('#fileInput') as HTMLInputElement;
   file = this.fileInput?.files?.[0];
  readonly maxFileSize = 1; // MB
  readonly allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"];
  uploadForm: FormGroup;
  fileSizeExceeded = false;
  invalidExtension = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.uploadForm = this.formBuilder.group({
      fileInput: ['', [
        Validators.required,
        this.fileSizeValidator(),
        this.fileExtensionValidator(this.allowedExtensions)
      ]]
    });
  }

  onSubmit() {
    const fileInput = document.querySelector('#fileInput') as HTMLInputElement;
    const file = fileInput?.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      console.log(file);
      this.http.post('https://localhost:7277/api/AzureImagesURL/UploadImage', formData)
        .subscribe((result: any) => {
          this.imageUrl.emit(result.url);
          console.log(result.url);
          // Reset the form after successful upload
          this.uploadForm.reset();
        }, (error: any) => {
          console.error(error);
          // Display user-friendly error message here
        });
    } else {
      console.log('No Selected Files');
    }
  }

  private fileSizeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const file = control.value;
      if (file && file.size > this.maxFileSize * 1024 * 1024) {
        this.fileSizeExceeded = true;
        return { 'fileSizeExceeded': true };
      }
      this.fileSizeExceeded = false;
      return null;
    };
  }

  private fileExtensionValidator(allowedExtensions: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const file = control.value;
      const fileName = file?.name;
      const fileExtension = fileName?.split('.').pop();
      if (fileExtension && allowedExtensions.indexOf('.' + fileExtension.toLowerCase()) === -1) {
        this.invalidExtension = true;
        return { invalidExtension: true };
      }
      this.invalidExtension = false;
      return null;
    }
  }

  validateFile() {
    const fileInput = document.querySelector('#fileInput') as HTMLInputElement;
    const file = fileInput?.files?.[0];
    if (file) {
      const fileName = file.name;
      const fileSize = file.size / 1024 / 1024; // Convert bytes to MB
      const fileExtension = fileName.split('.').pop()?.toLowerCase();

      if (fileSize > this.maxFileSize) {
        this.fileSizeExceeded = true;
      } else {
        this.fileSizeExceeded = false;
      }

      if (fileExtension && this.allowedExtensions.indexOf('.' + fileExtension) === -1) {
        this.invalidExtension = true;
      } else {
        this.invalidExtension = false;
      }
    } else {
      this.fileSizeExceeded = false;
      this.invalidExtension = false;
    }
  }
}
