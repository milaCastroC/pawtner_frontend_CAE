import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerInfoCardComponent } from './owner-info-card.component';

describe('OwnerInfoCardComponent', () => {
  let component: OwnerInfoCardComponent;
  let fixture: ComponentFixture<OwnerInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnerInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
