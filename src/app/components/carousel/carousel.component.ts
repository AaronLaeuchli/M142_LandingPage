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
    {'image': 'assets/images/aussicht1.jpg'}, 
    {'image': 'assets/images/dorf.JPG'},
    {'image': 'assets/images/funpark.jpg'},     
    {'image': 'assets/images/schneenebel.JPG'}, 
  ];

}
