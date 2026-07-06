import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHouseManagerInformation } from './ware-house-manager-information';

describe('WareHouseManagerInformation', () => {
  let component: WareHouseManagerInformation;
  let fixture: ComponentFixture<WareHouseManagerInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WareHouseManagerInformation],
    }).compileComponents();

    fixture = TestBed.createComponent(WareHouseManagerInformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
