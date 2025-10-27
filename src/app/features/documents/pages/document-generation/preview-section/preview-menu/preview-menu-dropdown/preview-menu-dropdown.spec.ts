import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewMenuDropdown } from './preview-menu-dropdown';

describe('PreviewMenuDropdown', () => {
  let component: PreviewMenuDropdown;
  let fixture: ComponentFixture<PreviewMenuDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewMenuDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewMenuDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
