import { TestBed } from '@angular/core/testing';

import { MsgResolverService } from './msg-resolver.service';

describe('MsgResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MsgResolverService = TestBed.get(MsgResolverService);
    expect(service).toBeTruthy();
  });
});
