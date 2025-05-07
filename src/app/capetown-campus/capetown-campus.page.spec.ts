import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapetownCampusPage } from './capetown-campus.page';

describe('CapetownCampusPage', () => {
  let component: CapetownCampusPage;
  let fixture: ComponentFixture<CapetownCampusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CapetownCampusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
