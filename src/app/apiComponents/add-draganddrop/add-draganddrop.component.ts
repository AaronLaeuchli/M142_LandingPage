import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../apiServices/image.service";

@Component({
  selector: 'app-add-draganddrop',
  templateUrl: './add-draganddrop.component.html',
  styleUrls: ['./add-draganddrop.component.scss']
})
export class AddDraganddropComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  files: File[] = [];
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  onSelect(event: any){
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onUpload() {
    for (var i = 0; i < this.files.length; i++){
      const uploadData = new FormData();
      uploadData.append('myFile', this.files[i], this.files[i].name);

      this.imageService.upload(uploadData)
        .subscribe(
        res => {console.log(res);
          this.receivedImageData = res;
          this.base64Data = this.receivedImageData.pic;
          this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
        err => console.log('Error Occured duringng saving: ' + err)
      );
    }

  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
