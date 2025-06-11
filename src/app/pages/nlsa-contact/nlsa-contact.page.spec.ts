import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NlsaContactPage } from './nlsa-contact.page';

describe('NlsaContactPage', () => {
  let component: NlsaContactPage;
  let fixture: ComponentFixture<NlsaContactPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NlsaContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
