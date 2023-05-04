import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';

export type ImageCompressorOutput = {
  formData: FormData;
  uploaded: {
    compressedImage: string;
    fileName: string;
  }[];
};

@Component({
  selector: 'app-compress-images-button',
  templateUrl: './compress-images-button.component.html',
  styleUrls: ['./compress-images-button.component.css']
})
export class CompressImagesButton {

  constructor(private imageCompress: NgxImageCompressService) {}

  @Input() hideSlider: boolean | undefined;
  @Input() limit: number = 20;

  photos: FormData = new FormData();
  photoUrls: {compressedImage:string, fileName:string}[] =[];

  @Output() imagesFormData = new EventEmitter<ImageCompressorOutput>();
  @Output() imagesCompressing = new EventEmitter<void>();

  failedToUpload: string[] = []

  readonly maxFileSize = 1 * 1024 * 1024;

  state: string = 'idle';

  async compressFile() {

    this.state = 'compressing';
    this.imagesCompressing.emit();

    const uploaded: {compressedImage:string, fileName:string}[] =[]

    this.imageCompress.uploadMultipleFilesOrReject().then(
      async (arrayOfFiles: { image: string, fileName:string, orientation: number }[]) => {

        for (const element of arrayOfFiles) {

          const {image,fileName,orientation} = element;

          const compressedImage = await this.imageCompress.compressFile(image, orientation, 80, 80, 1000, 1000);

          if (this.imageCompress.byteCount(compressedImage) <= this.maxFileSize ) {

            uploaded.push({compressedImage, fileName});
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

      if (uploaded.length) {

        uploaded.slice(0, this.limit).forEach(file => {
          if (this.photos.get(file.fileName) == null) {

            this.photoUrls.push(file)

            const imageFile = new File([file.compressedImage], file.fileName, { type: 'image/jpeg' });
            this.photos.append(file.fileName, imageFile, file.fileName);
          }
        })

        this.state = 'done'
      }

      this.imagesFormData.emit(this.exportPhotos());

    });
  }

  RemoveImage(key: string) {
    this.photos.delete(key);
    this.photoUrls.splice(this.photoUrls.findIndex(p => p.fileName == key), 1);
  }

  exportPhotos(): ImageCompressorOutput | undefined {

    const renamedFormData = new FormData();

    this.photos.forEach((value, key) => {
      renamedFormData.append('files', value, key);
    });

    return {formData: renamedFormData, uploaded: this.photoUrls};
  }
}
