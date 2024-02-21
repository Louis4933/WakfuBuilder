import { TestBed } from '@angular/core/testing';

import { EquipementItemTypeService } from './equipement-item-type.service';

describe('EquipementItemTypeService', () => {
  let service: EquipementItemTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipementItemTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
