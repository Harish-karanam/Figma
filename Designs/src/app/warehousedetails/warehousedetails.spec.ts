import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warehousedetails } from './warehousedetails';

describe('Warehousedetails', () => {
  let component: Warehousedetails;
  let fixture: ComponentFixture<Warehousedetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Warehousedetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Warehousedetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
