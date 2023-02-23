import { TestBed } from '@angular/core/testing';

import { ServicioTrapasoService } from './servicio-trapaso.service';

describe('ServicioTrapasoService', () => {
  let service: ServicioTrapasoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTrapasoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
