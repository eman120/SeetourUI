import { TestBed } from '@angular/core/testing';

import { TourguidService } from './tourguid.service';

describe('TourguidService', () => {
  let service: TourguidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourguidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
