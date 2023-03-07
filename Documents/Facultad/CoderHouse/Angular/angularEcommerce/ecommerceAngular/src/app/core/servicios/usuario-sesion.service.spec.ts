import { TestBed } from '@angular/core/testing';

import { UsuarioSesionService } from './usuario-sesion.service';

describe('UsuarioSesionService', () => {
  let service: UsuarioSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
