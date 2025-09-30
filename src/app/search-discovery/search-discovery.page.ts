
  import { Component } from '@angular/core';
import { LogService } from '../App-services/log.service';

@Component({
  selector: 'app-search-discovery',
  templateUrl: './search-discovery.page.html',
  styleUrls: ['./search-discovery.page.scss'],
  standalone: false,

})
export class SearchDiscoveryPage {
  constructor(private logService: LogService) {
    this.logService.log('Page viewed', 'Search Discovery Page');
  }

  searchQuery: string = '';
  showDropdown: boolean = false;
  dropdownHovered: boolean = false;

  performSearch() {
    const query = encodeURIComponent(this.searchQuery);
    const url = `https://nlsa.on.worldcat.org/discovery/search?query=${query}`;
    window.open(url, '_blank');
  }

  openAdvancedSearch() {
    window.open('https://nlsa.on.worldcat.org/advancedsearch?queryString=&databaseList=', '_blank');
  }

  redirectToOCLC() {
    window.open(
      'https://nlsa.authn.worldcat.org/login/manageduser-ui/cmnd/useraction/login?acsURL=https%3A%2F%2Fauthn.sd02.worldcat.org%2Fwayf%2Fmetaauth-ui%2Fcmnd%2Fprotocol%2Facs%2Fsaml2',
      '_blank'
    );
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  onDropdownMouseEnter() {
    this.dropdownHovered = true;
    this.showDropdown = true;
  }

  onDropdownMouseLeave() {
    this.dropdownHovered = false;
    setTimeout(() => {
      if (!this.dropdownHovered) {
        this.showDropdown = false;
      }
    }, 300); // delay to avoid immediate hide
  }
}
