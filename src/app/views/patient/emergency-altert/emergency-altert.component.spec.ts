import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyAltertComponent } from './emergency-altert.component';

describe('EmergencyAltertComponent', () => {
  let component: EmergencyAltertComponent;
  let fixture: ComponentFixture<EmergencyAltertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyAltertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyAltertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
