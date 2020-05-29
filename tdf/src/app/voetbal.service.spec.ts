import { TestBed } from '@angular/core/testing';

import { VoetbalService } from './voetbal.service';

describe('VoetbalService', () => {
  let service: VoetbalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoetbalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
