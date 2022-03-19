import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpgPngComponent } from './jpg-png.component';

describe('JpgPngComponent', () => {
  let component: JpgPngComponent;
  let fixture: ComponentFixture<JpgPngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpgPngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JpgPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
