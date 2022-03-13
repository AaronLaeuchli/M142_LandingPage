import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedPicturesComponent } from './edited-pictures.component';

describe('EditedPicturesComponent', () => {
  let component: EditedPicturesComponent;
  let fixture: ComponentFixture<EditedPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditedPicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditedPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
