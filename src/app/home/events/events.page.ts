import { Component, OnInit } from '@angular/core';

import {EventModel} from './models/event.model';
import {OrgFilterModel} from '../shared-models/orgFilter.model';

import orgFilter from '../shared-data/orgFilter.data';

import {EventService} from './services/event.service';
import orgs from '../../data/orgs.data';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  selectedTab: 'currentEvent' | 'upcomingEvent' = 'currentEvent';
  isFilterActive = false;
  chipText: string = null;
  filterOrgCode: string = null;

  currentEvents: EventModel[] = [];
  upcomingEvents: EventModel[] = [];

  filter: OrgFilterModel[] = orgFilter;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.currentEvents = this.eventService.getCurrentEvents();
    this.upcomingEvents = this.eventService.getUpcomingEvents();

    this.eventService.eventsObservable.subscribe(() => {
      this.currentEvents = this.eventService.getCurrentEvents();
      this.upcomingEvents = this.eventService.getUpcomingEvents();
    });
  }

  onTabChange(event: any): void {
    this.selectedTab = event.detail.value;
    if (this.isFilterActive) {
      this.onChipPress();
    }
  }

  onChipPress(): void {
    this.isFilterActive = false;
    this.filterOrgCode = null;
    this.chipText = null;

    if (this.selectedTab === 'currentEvent') {
      this.currentEvents = this.eventService.getCurrentEvents();
    } else {
      this.upcomingEvents = this.eventService.getUpcomingEvents();
    }
  }

  onFilterChange(event: any): void {
    this.isFilterActive = true;
    this.filterOrgCode = event.detail.value;
    this.chipText = orgs[event.detail.value].code;

    if (this.selectedTab === 'currentEvent') {
      this.currentEvents = this.eventService.getCurrentEventsByOrg(event.detail.value);
    } else {
      this.upcomingEvents = this.eventService.getUpcomingEventsByOrg(event.detail.value);
    }
  }

}
