import { Component, EventEmitter, Output } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';

export type ImageCompressorOutput = {
  formData: FormData;
  uploaded: {
    compressedImage: string;
    fileName: string;
  }[];
};

@Component({
  selector: 'app-upload-images-v2',
  templateUrl: './upload-images-v2.component.html',
  styleUrls: ['./upload-images-v2.component.css']
})
export class UploadImagesV2Component {

  constructor(private imageCompress: NgxImageCompressService) {}

  formData: FormData | undefined;
  @Output() imagesFormData = new EventEmitter<ImageCompressorOutput>();
  @Output() imagesCompressing = new EventEmitter<void>();

  failedToUpload: string[] = []
  uploaded: {compressedImage:string, fileName:string}[] = []

  readonly maxFileSize = 1 * 1024 * 1024;

  state: string = 'idle';

  async compressFile() {

    this.formData = new FormData();
    this.uploaded = [];
    this.failedToUpload = [];

    this.state = 'compressing';
    this.imagesCompressing.emit();

    this.imageCompress.uploadMultipleFilesOrReject().then(
      async (arrayOfFiles: { image: string, fileName:string, orientation: number }[]) => {

        for (const element of arrayOfFiles) {

          const {image,fileName,orientation} = element;

          const compressedImage = await this.imageCompress.compressFile(image, orientation, 80, 80, 1000, 1000);

          if (this.imageCompress.byteCount(compressedImage) <= this.maxFileSize ) {

            this.uploaded.push({compressedImage, fileName});
          }
          else {
            this.failedToUpload.push(fileName);
          }
        }

      }
    )
    .catch(()=>{
      this.state = 'idle'
    })
    .finally(() => {


      if (this.uploaded.length) {

        this.state = 'done'

        for (const file of this.uploaded) {
          const imageFile = new File([file.compressedImage], file.fileName, { type: 'image/jpeg' });
          this.formData!.append(file.fileName, imageFile, file.fileName);
        }

        this.imagesFormData.emit({formData: this.formData!, uploaded: this.uploaded});
      }

    });
  }
}
