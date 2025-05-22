import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPetsPageComponent } from './view-pets-page.component';

describe('ViewPetsPageComponent', () => {
  let component: ViewPetsPageComponent;
  let fixture: ComponentFixture<ViewPetsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPetsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
