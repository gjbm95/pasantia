import { TestBed, inject } from '@angular/core/testing';

import { ApipruebaService } from './apiprueba.service';

describe('ApipruebaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApipruebaService]
    });
  });

  it('should be created', inject([ApipruebaService], (service: ApipruebaService) => {
    expect(service).toBeTruthy();
  }));
});
