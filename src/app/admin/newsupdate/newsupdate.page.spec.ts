import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsupdatePage } from './newsupdate.page';

describe('NewsupdatePage', () => {
  let component: NewsupdatePage;
  let fixture: ComponentFixture<NewsupdatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
