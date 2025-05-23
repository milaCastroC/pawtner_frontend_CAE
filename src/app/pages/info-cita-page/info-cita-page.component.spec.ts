import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCitaPageComponent } from './info-cita-page.component';

describe('InfoCitaPageComponent', () => {
  let component: InfoCitaPageComponent;
  let fixture: ComponentFixture<InfoCitaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCitaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCitaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
