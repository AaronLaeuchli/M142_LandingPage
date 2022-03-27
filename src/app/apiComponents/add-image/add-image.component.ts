import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ImageService} from "../../apiServices/image.service";

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  constructor(private httpClient: HttpClient, private imageService: ImageService) { }

  ngOnInit(): void {
  }

  title = 'ImageUploaderFrontEnd';

  public selectedFile: any;
  public event1: any;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  public  onFileChanged(event: any) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }


  // This part is for uploading
  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    console.log("test");

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
