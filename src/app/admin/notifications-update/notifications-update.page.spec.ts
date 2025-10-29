import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsUpdatePage } from './notifications-update.page';

describe('NotificationsUpdatePage', () => {
  let component: NotificationsUpdatePage;
  let fixture: ComponentFixture<NotificationsUpdatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
