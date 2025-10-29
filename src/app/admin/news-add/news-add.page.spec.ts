import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsAddPage } from './news-add.page';

describe('NewsAddPage', () => {
  let component: NewsAddPage;
  let fixture: ComponentFixture<NewsAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
