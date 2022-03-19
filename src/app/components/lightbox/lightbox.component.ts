import { Component, OnInit } from '@angular/core';
import { IAlbum, IEvent, Lightbox, LIGHTBOX_EVENT, LightboxConfig, LightboxEvent } from 'ngx-lightbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  public albums: Array<IAlbum>;
  private _subscription: Subscription | undefined;
  constructor(
    private _lightbox: Lightbox,
    private _lightboxEvent: LightboxEvent,
    private _lighboxConfig: LightboxConfig
  ) {
    this.albums = [];
    for (let i = 1; i <= 6; i++) {
      const src = 'assets/images/lightbox/test/image' + i + '.jpg';
      const thumb = 'assets/images/lightbox/test/image' + i + '-thumb.jpg';
      const album = {
        src: src,
        thumb: thumb
      };

      this.albums.push(album);
    }

    // set default config
    this._lighboxConfig.fadeDuration = 1;
  }

  open(index: number): void {
    // @ts-ignore
    this._subscription = this._lightboxEvent.lightboxEvent$.subscribe((event: IEvent) => this._onReceivedEvent(event));

    // override the default config
    this._lightbox.open(this.albums, index, {
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



  ngOnInit(): void {
  }

}
