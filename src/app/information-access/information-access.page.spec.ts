import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationAccessPage } from './information-access.page';

describe('InformationAccessPage', () => {
  let component: InformationAccessPage;
  let fixture: ComponentFixture<InformationAccessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationAccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
