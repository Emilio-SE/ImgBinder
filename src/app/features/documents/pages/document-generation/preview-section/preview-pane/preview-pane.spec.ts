import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPane } from './preview-pane';

describe('PreviewPane', () => {
  let component: PreviewPane;
  let fixture: ComponentFixture<PreviewPane>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewPane]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewPane);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
