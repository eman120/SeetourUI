import { Component, EventEmitter,Input,Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent {
  @Input() tourId :number| undefined;
  selectedFiles: File[] = [];
  uploadedUrls: any[] = [];
  @Output() imagesUrls = new EventEmitter<any>();
  @Output() PastToursUrls = new EventEmitter<any>();
  tourPhoto:any[]=[];
  pastPhoto:any[]=[];
  readonly maxFileSize = 1; // MB
  readonly allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"];
  uploadForm: FormGroup;
  fileSizeExceeded = false;
  invalidExtension = false;
  isUploaded :boolean|undefined;
  flag=true;

  constructor(private http: HttpClient , private formbuilder:FormBuilder) {
    this.uploadForm=this.formbuilder.group({
      fileInput:['',[
        Validators.required,
        this.fileSizeValidator(),
        this.fileExtensionValidator(this.allowedExtensions)
      ]]
    })
  }

 onSelect(event: any) {
  this.isUploaded=false;
  
  const files = event.target.files as File[];
  if (files && files.length > 0) {
    const fileNames = [];
    for (const file of files) {
      const fileName = file.name;
      const fileSize = file.size / 1024 / 1024; // Convert bytes to MB
      const fileExtension = fileName.split('.').pop()?.toLowerCase();

      if (fileSize > this.maxFileSize) {
        this.fileSizeExceeded = true;
      }

      if (fileExtension && this.allowedExtensions.indexOf('.' + fileExtension) === -1) {
        this.invalidExtension = true;
      }

      fileNames.push(fileName);
    }
    // Clear the input element before setting new file names
   // event.target.value = '';
   //console.log(files);
   this.selectedFiles=files;
  
   // this.uploadForm.controls['fileInput'].setValue(files);
    //this.uploadForm.controls['fileInput'].updateValueAndValidity();
  }
}

  

  onSubmit() {
    this.flag=false;
   // this.isUploaded=false;
    const formData = new FormData();
    for (const file of this.selectedFiles) {
      formData.append('files', file, file.name);
    }

    this.http.post('https://localhost:7277/api/AzureImagesURL/UploadImages', formData)
      .subscribe((result: any) => {
       // console.log(result);
        this.uploadedUrls = result;

        //Mapping the array to TourPhoto array
        if(this.tourId){
          this.pastPhoto=this.uploadedUrls.map(photo=>{
            return {
              id:0,
              // url:"",
              photoId:photo.id,
              tourId:Number(this.tourId)
              
            };
          });
          this.PastToursUrls.emit(this.pastPhoto);
          console.log(this.tourId);
          console.log(this.pastPhoto);
          const requestBody = {
            tourid: Number(this.tourId),
            photoDtos: this.pastPhoto
          };
          console.log(requestBody);
          // const requestBody = new HttpParams().set('tourid' ,this.tourId).set('photoDtos' ,this.imagesUrls);
          this.http.post(environment.baseUrl+ "" + ApiPaths.tour + ApiPaths.pics , requestBody).subscribe(
            response => {
              console.log('Answer submitted successfully');
            }, error => {
              console.error('Error submitting answer: ', error);
            });
        }
         else{
          this.tourPhoto=this.uploadedUrls.map(photo=>{
            return {
              id:0,
              url:"",
              photoId:photo.id,
              tourId:0
              
            };
          });
          this.isUploaded=true;
          this.imagesUrls.emit(this.tourPhoto);
        }

        console.log(this.uploadedUrls);
       // console.log(this.tourPhoto);

        // Reset the form after successful upload
       // console.log(this.uploadedUrls[0].url);
        this.selectedFiles = [];
      }, (error: any) => {
        console.error(error);
      });
  }

  private fileSizeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const files = control.value as File[];
      for (const file of files) {
        if (file && file.size > this.maxFileSize * 1024 * 1024) {
          this.fileSizeExceeded = true;
          return { 'fileSizeExceeded': true };
        }
      }
      this.fileSizeExceeded = false;
      return null;
    };
  }
  

  private fileExtensionValidator(allowedExtensions: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const files = control.value as File[];
      for (const file of files) {
        const fileName = file?.name;
        const fileExtension = fileName?.split('.').pop();
        if (fileExtension && allowedExtensions.indexOf('.' + fileExtension.toLowerCase()) === -1) {
          this.invalidExtension = true;
          return { invalidExtension: true };
        }
      }
      this.invalidExtension = false;
      return null;
    };
  }
  

  // validateFiles(files: File[]) {
  //   for (const file of files) {
  //     const fileName = file.name;
  //     const fileSize = file.size / 1024 / 1024; // Convert bytes to MB
  //     const fileExtension = fileName.split('.').pop()?.toLowerCase();
  
  //     if (fileSize > this.maxFileSize) {
  //       this.fileSizeExceeded = true;
  //       return { 'fileSizeExceeded': true };
  //     }
  
  //     if (fileExtension && this.allowedExtensions.indexOf('.' + fileExtension) === -1) {
  //       this.invalidExtension = true;
  //       return { 'invalidExtension': true };
  //     }
  //   }
  
  //   this.fileSizeExceeded = false;
  //   this.invalidExtension = false;
  //   return null;
  // }
  
}