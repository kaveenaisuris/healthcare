import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifddetailsComponent } from './rifddetails.component';

describe('RifddetailsComponent', () => {
  let component: RifddetailsComponent;
  let fixture: ComponentFixture<RifddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RifddetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RifddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
