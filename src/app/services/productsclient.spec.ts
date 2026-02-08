import { TestBed } from '@angular/core/testing';

import { Productsclient } from './productsclient';

describe('Productsclient', () => {
  let service: Productsclient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productsclient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
