import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharpnessDifferenceComponent } from './sharpness-difference.component';

describe('SharpnessDifferenceComponent', () => {
  let component: SharpnessDifferenceComponent;
  let fixture: ComponentFixture<SharpnessDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharpnessDifferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharpnessDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
