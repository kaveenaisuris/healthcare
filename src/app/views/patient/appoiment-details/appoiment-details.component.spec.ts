import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoimentDetailsComponent } from './appoiment-details.component';

describe('AppoimentDetailsComponent', () => {
  let component: AppoimentDetailsComponent;
  let fixture: ComponentFixture<AppoimentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoimentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoimentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
