import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewMenu } from './preview-menu';

describe('PreviewMenu', () => {
  let component: PreviewMenu;
  let fixture: ComponentFixture<PreviewMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
