import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotPage } from './pot.page';

describe('PotPage', () => {
  let component: PotPage;
  let fixture: ComponentFixture<PotPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
