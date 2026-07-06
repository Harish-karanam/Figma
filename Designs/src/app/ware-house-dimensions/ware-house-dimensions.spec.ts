import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHouseDimensions } from './ware-house-dimensions';

describe('WareHouseDimensions', () => {
  let component: WareHouseDimensions;
  let fixture: ComponentFixture<WareHouseDimensions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WareHouseDimensions],
    }).compileComponents();

    fixture = TestBed.createComponent(WareHouseDimensions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
