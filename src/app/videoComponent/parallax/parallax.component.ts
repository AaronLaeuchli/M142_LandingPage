import { Component, OnInit } from '@angular/core';
import {IParallaxScrollConfig} from "ngx-parallax-scroll";

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  ngParallaxConf: IParallaxScrollConfig = {
    parallaxSpeed: 1,
    parallaxSmoothness: 1,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease-in',
    parallaxThrottleTime: 80
  };

  constructor() { }

  ngOnInit(): void {
  }

  private play: number = 1;
  private speed: number = 1;
  private muted: number = 1;


  public pause() {
    var video = document.getElementById('video');

    if (this.play == 0) {
      // @ts-ignore
      video.pause();
      this.play = 1;
    } else if (this.play == 1) {
      // @ts-ignore
      video.play();
      this.play = 0;
    }
  }

    public addSpeed(){
      var video = document.getElementById('video');

      if (this.speed == 0) {
        // @ts-ignore
        video.playbackRate  = 5.0;
        this.speed = 1;
      } else if (this.speed == 1) {
        // @ts-ignore
        video.playbackRate  = 1.0;
        this.speed = 0;
      }
  }

  public mute(){
    var video = document.getElementById('video');

    if (this.muted == 0) {
      // @ts-ignore
      video.muted = true;
      this.muted = 1;
    } else if (this.muted == 1) {
      // @ts-ignore
      video.muted = false;
      this.muted = 0;
    }
  }
}
