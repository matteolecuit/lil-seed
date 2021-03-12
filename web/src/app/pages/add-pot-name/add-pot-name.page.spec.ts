import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPotNamePage } from './add-pot-name.page';

describe('AddPotNamePage', () => {
  let component: AddPotNamePage;
  let fixture: ComponentFixture<AddPotNamePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPotNamePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPotNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
