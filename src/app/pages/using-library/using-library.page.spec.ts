import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsingLibraryPage } from './using-library.page';

describe('UsingLibraryPage', () => {
  let component: UsingLibraryPage;
  let fixture: ComponentFixture<UsingLibraryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
