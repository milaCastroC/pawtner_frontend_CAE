import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalRecordFormComponent } from './add-medical-record-form.component';

describe('AddMedicalRecordFormComponent', () => {
  let component: AddMedicalRecordFormComponent;
  let fixture: ComponentFixture<AddMedicalRecordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMedicalRecordFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMedicalRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
