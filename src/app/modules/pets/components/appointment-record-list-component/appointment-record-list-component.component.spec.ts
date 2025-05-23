import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentRecordListComponentComponent } from './appointment-record-list-component.component';

describe('AppointmentRecordListComponentComponent', () => {
  let component: AppointmentRecordListComponentComponent;
  let fixture: ComponentFixture<AppointmentRecordListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentRecordListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentRecordListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
