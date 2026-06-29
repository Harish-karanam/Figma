import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContent2 } from './main-content-2';

describe('MainContent2', () => {
  let component: MainContent2;
  let fixture: ComponentFixture<MainContent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainContent2],
    }).compileComponents();

    fixture = TestBed.createComponent(MainContent2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});