import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCheck } from './status-check';

describe('StatusCheck', () => {
  let component: StatusCheck;
  let fixture: ComponentFixture<StatusCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusCheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusCheck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
