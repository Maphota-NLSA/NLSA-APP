import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutreachPage } from './outreach.page';

describe('OutreachPage', () => {
  let component: OutreachPage;
  let fixture: ComponentFixture<OutreachPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OutreachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
