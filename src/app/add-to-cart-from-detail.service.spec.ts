import { TestBed } from '@angular/core/testing';

import { AddToCartFromDetailService } from './add-to-cart-from-detail.service';

describe('AddToCartFromDetailService', () => {
  let service: AddToCartFromDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToCartFromDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
