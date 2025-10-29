import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsAddPage } from './notifications-add.page';

describe('NotificationsAddPage', () => {
  let component: NotificationsAddPage;
  let fixture: ComponentFixture<NotificationsAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
