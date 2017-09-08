import { TestBed, inject } from '@angular/core/testing';

import { TestResolverService } from './test-resolver.service';

describe('TestResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestResolverService]
    });
  });

  it('should ...', inject([TestResolverService], (service: TestResolverService) => {
    expect(service).toBeTruthy();
  }));
});
