import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentGeneration } from './document-generation';

describe('DocumentGeneration', () => {
  let component: DocumentGeneration;
  let fixture: ComponentFixture<DocumentGeneration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentGeneration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentGeneration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
