import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  showHide() {

  }

  isShowHideFlag:any = "over"

  responsiveClick(){
    console.log('test');
    
  }
}
