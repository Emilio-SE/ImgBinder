import { TestBed } from '@angular/core/testing';

import { FileUploader } from './file-uploader';

describe('FileUploader', () => {
  let service: FileUploader;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
