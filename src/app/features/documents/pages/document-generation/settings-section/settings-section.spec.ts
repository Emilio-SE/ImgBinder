import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSection } from './settings-section';

describe('SettingsSection', () => {
  let component: SettingsSection;
  let fixture: ComponentFixture<SettingsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
