import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpgPngDialogComponent } from './jpg-png-dialog.component';

describe('JpgPngDialogComponent', () => {
  let component: JpgPngDialogComponent;
  let fixture: ComponentFixture<JpgPngDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpgPngDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JpgPngDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
