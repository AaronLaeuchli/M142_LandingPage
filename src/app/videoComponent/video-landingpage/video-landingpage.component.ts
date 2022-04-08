import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IParallaxScrollConfig} from "ngx-parallax-scroll";

@Component({
  selector: 'app-video-landingpage',
  templateUrl: './video-landingpage.component.html',
  styleUrls: ['./video-landingpage.component.scss']
})
export class VideoLandingpageComponent implements OnInit {



  constructor(private router:Router) { }


  ngOnInit(): void {
  }

  showHide() {

  }
  isShowHideFlag:any = "over"



}
