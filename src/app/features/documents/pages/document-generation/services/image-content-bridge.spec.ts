import { TestBed } from '@angular/core/testing';

import { ImageContentBridge } from './image-content-bridge';

describe('ImageContentBridge', () => {
  let service: ImageContentBridge;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageContentBridge);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
