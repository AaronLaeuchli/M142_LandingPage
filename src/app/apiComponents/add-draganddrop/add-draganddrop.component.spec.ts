import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDraganddropComponent } from './add-draganddrop.component';

describe('AddDraganddropComponent', () => {
  let component: AddDraganddropComponent;
  let fixture: ComponentFixture<AddDraganddropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDraganddropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDraganddropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
