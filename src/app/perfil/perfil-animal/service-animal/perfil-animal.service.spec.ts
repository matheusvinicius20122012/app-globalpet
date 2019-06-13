import { TestBed } from '@angular/core/testing';

import { PerfilAnimalService } from './perfil-animal.service';

describe('PerfilAnimalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfilAnimalService = TestBed.get(PerfilAnimalService);
    expect(service).toBeTruthy();
  });
});
