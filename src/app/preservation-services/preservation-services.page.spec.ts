import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreservationServicesPage } from './preservation-services.page';

describe('PreservationServicesPage', () => {
  let component: PreservationServicesPage;
  let fixture: ComponentFixture<PreservationServicesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreservationServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
