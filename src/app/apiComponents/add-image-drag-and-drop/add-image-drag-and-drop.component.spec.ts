import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImageDragAndDropComponent } from './add-image-drag-and-drop.component';

describe('AddImageDragAndDropComponent', () => {
  let component: AddImageDragAndDropComponent;
  let fixture: ComponentFixture<AddImageDragAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImageDragAndDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImageDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
