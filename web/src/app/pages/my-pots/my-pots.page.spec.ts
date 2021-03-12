import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPotsPage } from './my-pots.page';

describe('MyPotsPage', () => {
  let component: MyPotsPage;
  let fixture: ComponentFixture<MyPotsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPotsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
