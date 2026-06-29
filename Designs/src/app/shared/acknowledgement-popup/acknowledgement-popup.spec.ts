import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgementPopup } from './acknowledgement-popup';

describe('AcknowledgementPopup', () => {
  let component: AcknowledgementPopup;
  let fixture: ComponentFixture<AcknowledgementPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcknowledgementPopup],
    }).compileComponents();

    fixture = TestBed.createComponent(AcknowledgementPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
