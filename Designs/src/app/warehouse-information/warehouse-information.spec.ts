import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseInformation } from './warehouse-information';

describe('WarehouseInformation', () => {
  let component: WarehouseInformation;
  let fixture: ComponentFixture<WarehouseInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehouseInformation],
    }).compileComponents();

    fixture = TestBed.createComponent(WarehouseInformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
