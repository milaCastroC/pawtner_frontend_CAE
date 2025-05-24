import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentRecordItemComponentComponent } from './appointment-record-item-component.component';

describe('AppointmentRecordItemComponentComponent', () => {
  let component: AppointmentRecordItemComponentComponent;
  let fixture: ComponentFixture<AppointmentRecordItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentRecordItemComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentRecordItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
