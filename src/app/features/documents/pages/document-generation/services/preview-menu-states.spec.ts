import { TestBed } from '@angular/core/testing';

import { PreviewMenuStates } from './preview-menu-states';

describe('PreviewMenuStates', () => {
  let service: PreviewMenuStates;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviewMenuStates);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
