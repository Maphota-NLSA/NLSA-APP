import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchDiscoveryPage } from './search-discovery.page';

describe('SearchDiscoveryPage', () => {
  let component: SearchDiscoveryPage;
  let fixture: ComponentFixture<SearchDiscoveryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDiscoveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
