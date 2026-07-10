import { TestBed } from '@angular/core/testing';

import { SaveDraftPopup } from './save-draft-popup';

describe('SaveDraftPopup', () => {
  let service: SaveDraftPopup;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveDraftPopup);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
