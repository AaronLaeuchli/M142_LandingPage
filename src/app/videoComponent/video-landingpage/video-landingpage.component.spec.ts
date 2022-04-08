import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLandingpageComponent } from './video-landingpage.component';

describe('VideoLandingpageComponent', () => {
  let component: VideoLandingpageComponent;
  let fixture: ComponentFixture<VideoLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoLandingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
