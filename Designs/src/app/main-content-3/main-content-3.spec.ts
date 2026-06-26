import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContent3 } from './main-content-3';

describe('MainContent3', () => {
  let component: MainContent3;
  let fixture: ComponentFixture<MainContent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainContent3],
    }).compileComponents();

    fixture = TestBed.createComponent(MainContent3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
