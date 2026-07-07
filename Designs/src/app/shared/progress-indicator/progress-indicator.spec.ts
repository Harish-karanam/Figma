import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressIndicator } from './progress-indicator';

describe('ProgressIndicator', () => {
  let component: ProgressIndicator;
  let fixture: ComponentFixture<ProgressIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressIndicator],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressIndicator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
