import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankInfo } from './bank-info';

describe('BankInfo', () => {
  let component: BankInfo;
  let fixture: ComponentFixture<BankInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(BankInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
