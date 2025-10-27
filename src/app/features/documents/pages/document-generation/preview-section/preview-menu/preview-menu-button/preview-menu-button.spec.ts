import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewMenuButton } from './preview-menu-button';

describe('PreviewMenuButton', () => {
  let component: PreviewMenuButton;
  let fixture: ComponentFixture<PreviewMenuButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewMenuButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewMenuButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
