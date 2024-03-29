import { TestBed } from '@angular/core/testing';
import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService<any, any>; // Usando any para los tipos genéricos

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject<CrudService<any, any>>(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
