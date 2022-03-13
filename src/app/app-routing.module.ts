import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackwhiteComponent } from './components/blackwhite/blackwhite.component';
import { BlurComponent } from './components/blur/blur.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { MockupComponent } from './components/mockup/mockup.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import {EditedPicturesComponent} from "./components/edited-pictures/edited-pictures.component";



const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'mockup', component: MockupComponent },
  { path: 'matrix', component: MatrixComponent },
  { path: 'responsive', component: ResponsiveComponent },
  { path: 'blackwhite', component: BlackwhiteComponent },
  { path: 'blur', component: BlurComponent },
  { path: 'edited', component: EditedPicturesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
