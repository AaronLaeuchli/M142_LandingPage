import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showHide() {

  }

  isShowHideFlag:any = "over"


  clickMockup(){
    console.log("clickMockup");
    this.router.navigateByUrl('mockup');
  }

  clickMatrix(){
    console.log("clickMatrix");
    this.router.navigateByUrl('matrix');
  }

  clickResponsive(){
    console.log("clickResponsive");
    this.router.navigateByUrl('responsive');
  }


}

