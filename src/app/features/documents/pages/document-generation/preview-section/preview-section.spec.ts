import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSection } from './preview-section';

describe('PreviewSection', () => {
  let component: PreviewSection;
  let fixture: ComponentFixture<PreviewSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
