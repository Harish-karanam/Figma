import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDraftPopup } from './save-draft-popup';

describe('SaveDraftPopup', () => {
  let component: SaveDraftPopup;
  let fixture: ComponentFixture<SaveDraftPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveDraftPopup],
    }).compileComponents();

    fixture = TestBed.createComponent(SaveDraftPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
