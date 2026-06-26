import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar2 } from './sidebar-2';

describe('Sidebar2', () => {
  let component: Sidebar2;
  let fixture: ComponentFixture<Sidebar2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sidebar2],
    }).compileComponents();

    fixture = TestBed.createComponent(Sidebar2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
