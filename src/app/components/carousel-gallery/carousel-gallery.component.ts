import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-gallery',
  templateUrl: './carousel-gallery.component.html',
  styleUrls: ['./carousel-gallery.component.scss']
})
export class CarouselGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {'image': 'assets/images/pano1.jpg'},
    {'image': 'assets/images/pano2.jpg'},
    {'image': 'assets/images/pano4.jpg'},
    {'image': 'assets/images/pano5.jpg'},
  ];

}
