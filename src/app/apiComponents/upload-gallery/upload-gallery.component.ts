import { Component, OnInit } from '@angular/core';
import {IAlbum, IEvent, Lightbox, LIGHTBOX_EVENT, LightboxConfig, LightboxEvent} from "ngx-lightbox";
import {Subscription} from "rxjs";
import {Image} from "../../models/image.model";
import {ImageService} from "../../apiServices/image.service";
import {ImageInfo} from "../../models/image-info";

@Component({
  selector: 'app-upload-gallery',
  templateUrl: './upload-gallery.component.html',
  styleUrls: ['./upload-gallery.component.scss']
})
export class UploadGalleryComponent implements OnInit {

  public albums: ImageInfo[] | undefined;
  private _subscription: Subscription | undefined;
  files: File[] = [];

  constructor(
    private _lightbox: Lightbox,
    private _lightboxEvent: LightboxEvent,
    private _lighboxConfig: LightboxConfig,
    private imageService: ImageService
  ) {
    this.imageService.getImageInfo().subscribe(r => {
    this.albums = r.imageInfoList;

    // set default config
    this._lighboxConfig.fadeDuration = 1;
    });
  }

  open(index: ImageInfo): void {
    // @ts-ignore
    this._subscription = this._lightboxEvent.lightboxEvent$.subscribe((event: IEvent) => this._onReceivedEvent(event));

    const album = {
      src: "http://localhost:8091/api/getImages/" + index.imageId,
      thumb: "http://localhost:8091/api/getImages/" + index.imageId
    };

    // override the default config
    this._lightbox.open(new Array<IAlbum>(album), 0, {
      wrapAround: true,
      showImageNumberLabel: true,
      disableScrolling: true,
      showZoom: true,
      showRotate: true,
      showDownloadButton: true
    });
  }

  private _onReceivedEvent(event: IEvent): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      // @ts-ignore
      this._subscription.unsubscribe();
    }
  }

  public getAllImages(){
   this.imageService.getImageInfo().subscribe(r => console.log(r.imageInfoList));

  }



  ngOnInit(): void {
    this.getAllImages();
  }

}
