import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BibliographicServicesPage } from './bibliographic-services.page';

describe('BibliographicServicesPage', () => {
  let component: BibliographicServicesPage;
  let fixture: ComponentFixture<BibliographicServicesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliographicServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
