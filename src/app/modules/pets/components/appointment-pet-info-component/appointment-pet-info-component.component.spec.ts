import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPetInfoComponentComponent } from './appointment-pet-info-component.component';

describe('AppointmentPetInfoComponentComponent', () => {
  let component: AppointmentPetInfoComponentComponent;
  let fixture: ComponentFixture<AppointmentPetInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentPetInfoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentPetInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
