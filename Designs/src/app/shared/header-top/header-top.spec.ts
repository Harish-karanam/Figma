import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTop } from './header-top';

describe('HeaderTop', () => {
  let component: HeaderTop;
  let fixture: ComponentFixture<HeaderTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
