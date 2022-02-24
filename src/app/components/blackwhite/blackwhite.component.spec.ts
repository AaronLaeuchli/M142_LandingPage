import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackwhiteComponent } from './blackwhite.component';

describe('BlackwhiteComponent', () => {
  let component: BlackwhiteComponent;
  let fixture: ComponentFixture<BlackwhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackwhiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackwhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
