import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoDialogComponent } from './iso-dialog.component';

describe('IsoDialogComponent', () => {
  let component: IsoDialogComponent;
  let fixture: ComponentFixture<IsoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
