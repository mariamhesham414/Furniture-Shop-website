import { TestBed } from '@angular/core/testing';

import { ProductsListWithApiService } from './products-list-with-api.service';

describe('ProductsListWithApiService', () => {
  let service: ProductsListWithApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsListWithApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
