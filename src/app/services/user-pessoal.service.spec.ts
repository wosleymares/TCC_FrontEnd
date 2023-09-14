import { TestBed } from '@angular/core/testing';

import { UserPessoalService } from './user-api.service';

describe('UserPessoalService', () => {
  let service: UserPessoalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPessoalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
