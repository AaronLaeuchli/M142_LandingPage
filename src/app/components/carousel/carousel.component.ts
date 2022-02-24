import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

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
