import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPotPage } from './add-pot.page';

describe('AddPotPage', () => {
  let component: AddPotPage;
  let fixture: ComponentFixture<AddPotPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPotPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
