import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeImageUpdatePage } from './home-image-update.page';

describe('HomeImageUpdatePage', () => {
  let component: HomeImageUpdatePage;
  let fixture: ComponentFixture<HomeImageUpdatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeImageUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
