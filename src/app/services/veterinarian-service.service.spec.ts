import { TestBed } from '@angular/core/testing';

import { VeterinarianServiceService } from './veterinarian-service.service';

describe('VeterinarianServiceService', () => {
  let service: VeterinarianServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterinarianServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
