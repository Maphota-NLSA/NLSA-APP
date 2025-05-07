import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PretoriaCampusPage } from './pretoria-campus.page';

describe('PretoriaCampusPage', () => {
  let component: PretoriaCampusPage;
  let fixture: ComponentFixture<PretoriaCampusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PretoriaCampusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
