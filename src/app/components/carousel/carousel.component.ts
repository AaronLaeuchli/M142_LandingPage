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
    {'image': 'assets/images/laeuchliskulpturen/skulptur1.jpg'},
    {'image': 'assets/images/laeuchliskulpturen/skulptur2.jpg'},
    {'image': 'assets/images/laeuchliskulpturen/skulptur3.jpg'},
    {'image': 'assets/images/laeuchliskulpturen/skulptur4.jpg'},
  ];

}
