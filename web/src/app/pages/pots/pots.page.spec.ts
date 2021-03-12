import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotsPage } from './pots.page';

describe('PotsPage', () => {
  let component: PotsPage;
  let fixture: ComponentFixture<PotsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
