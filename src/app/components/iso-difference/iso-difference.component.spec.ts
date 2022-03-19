import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoDifferenceComponent } from './iso-difference.component';

describe('IsoDifferenceComponent', () => {
  let component: IsoDifferenceComponent;
  let fixture: ComponentFixture<IsoDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoDifferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
