import { TestBed } from '@angular/core/testing';

import { SrcappservicesusuarioService } from './srcappservicesusuario.service';

describe('SrcappservicesusuarioService', () => {
  let service: SrcappservicesusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrcappservicesusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
