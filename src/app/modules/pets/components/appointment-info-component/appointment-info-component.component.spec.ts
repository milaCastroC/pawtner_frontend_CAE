import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentInfoComponentComponent } from './appointment-info-component.component';

describe('AppointmentInfoComponentComponent', () => {
  let component: AppointmentInfoComponentComponent;
  let fixture: ComponentFixture<AppointmentInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentInfoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
