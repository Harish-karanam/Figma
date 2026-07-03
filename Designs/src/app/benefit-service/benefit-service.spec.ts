import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitService } from './benefit-service';

describe('BenefitService', () => {
  let component: BenefitService;
  let fixture: ComponentFixture<BenefitService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenefitService],
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
