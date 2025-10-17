import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPane } from './upload-pane';

describe('UploadPane', () => {
  let component: UploadPane;
  let fixture: ComponentFixture<UploadPane>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadPane]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPane);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
