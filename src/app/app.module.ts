import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CarouselComponent } from './components/carousel/carousel.component';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BlackwhiteComponent } from './components/blackwhite/blackwhite.component';
import { BlurComponent } from './components/blur/blur.component';
import { MockupComponent } from './components/mockup/mockup.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';

import 'img-comparison-slider';
import { EditedPicturesComponent } from './components/edited-pictures/edited-pictures.component';


// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    CarouselComponent,
    LandingPageComponent,
    BlackwhiteComponent,
    BlurComponent,
    MockupComponent,
    MatrixComponent,
    ResponsiveComponent,
    EditedPicturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
