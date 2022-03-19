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
import { LightboxModule } from 'ngx-lightbox';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { IsoDifferenceComponent } from './components/iso-difference/iso-difference.component';
import { SharpnessDifferenceComponent } from './components/sharpness-difference/sharpness-difference.component';
import { JpgPngComponent } from './components/jpg-png/jpg-png.component';

import { MatDialogModule } from '@angular/material/dialog';
import { JpgPngDialogComponent } from './dialog/jpg-png-dialog/jpg-png-dialog.component';
import { IsoDialogComponent } from './dialog/iso-dialog/iso-dialog.component';
import { CarouselGalleryComponent } from './components/carousel-gallery/carousel-gallery.component';



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
    LightboxComponent,
    IsoDifferenceComponent,
    SharpnessDifferenceComponent,
    JpgPngComponent,
    JpgPngDialogComponent,
    IsoDialogComponent,
    CarouselGalleryComponent,
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
    LightboxModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
