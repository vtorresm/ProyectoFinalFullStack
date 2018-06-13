import { TestBed, inject } from '@angular/core/testing';

import { FerreteriaService } from './ferreteria.service';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FerreteriaService]
    });
  });

  it('should be created', inject([FerreteriaService], (service: FerreteriaService) => {
    expect(service).toBeTruthy();
  }));
});
