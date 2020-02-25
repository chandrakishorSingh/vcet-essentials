import { Component, OnInit } from '@angular/core';
import orgs from '../../data/orgs.data';
import {OrgFilterModel} from '../shared-models/orgFilter.model';
import orgFilter from '../shared-data/orgFilter.data';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {

  isFilterActive = false;
  chipText: string = null;
  filter: OrgFilterModel[] = orgFilter;

  constructor() {
    console.log('Blog module started');
  }

  ngOnInit() {
  }

  onChipPress(): void {
    if (this.isFilterActive) {
      this.isFilterActive = false;
      // this.filterOrgCode = null;
      // this.chipText = null;
      //
      // if (this.selectedTab === 'currentEvent') {
      //   this.currentEvents = this.eventService.getCurrentEvents();
      // } else {
      //   this.upcomingEvents = this.eventService.getUpcomingEvents();
      // }
    }
  }

  onFilterChange(event: any): void {
    this.isFilterActive = true;
    // this.filterOrgCode = event.detail.value;
    // this.chipText = orgs[event.detail.value].code;
    //
    // if (this.selectedTab === 'currentEvent') {
    //   this.currentEvents = this.eventService.getCurrentEventsByOrg(event.detail.value);
    // } else {
    //   this.upcomingEvents = this.eventService.getUpcomingEventsByOrg(event.detail.value);
    // }
  }

}
