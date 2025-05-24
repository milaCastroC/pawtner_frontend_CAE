import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHistorialPageComponent } from './add-historial-page.component';

describe('AddHistorialPageComponent', () => {
  let component: AddHistorialPageComponent;
  let fixture: ComponentFixture<AddHistorialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHistorialPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHistorialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
