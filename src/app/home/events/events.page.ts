import { Component, OnInit } from '@angular/core';

import {EventModel} from '../../models/event.model';
import {EventService} from './services/event.service';
import {orgsMapping} from '../../data/orgs.data';
import {OrgModel} from '../../models/org.model';
import {ORG_CODE} from '../../types/types';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  selectedTab: 'current' | 'upcoming' = 'current';
  isFilterActive = false;
  chipText: ORG_CODE;
  filterOrgCode: ORG_CODE;

  filter: OrgModel[] = orgsMapping.getOrgs();

  constructor(private eventService: EventService) {}

  ngOnInit() {}

  onTabChange(event: any): void {
    // extract the selected tab value and assign it to selectedTab
    const eventData = event.detail.value;
    this.selectedTab = eventData;
    // if filter is active then remove it when moving from one tab to another
    if (this.isFilterActive) {
      this.onChipRemove();
    }
    this.eventService.eventFilterObservable.next({ orgCode: this.filterOrgCode, eventCategory: this.selectedTab });
  }

  onChipRemove(): void {
    // make chip invisible and filter button visible
    this.isFilterActive = false;

    // make filterOrgCode null as now we are not filtering notices on any org. also emit the filter state
    this.filterOrgCode = null;
    this.eventService.eventFilterObservable.next({ orgCode: this.filterOrgCode, eventCategory: this.selectedTab });
  }

  onFilterSelect(event: any): void {
    // make chip visible and filter button invisible
    this.isFilterActive = true;

    // extract the selected org's code and assign it to chip text and filterOrgCode
    const eventData: ORG_CODE = event.detail.value;
    this.chipText = eventData;
    this.filterOrgCode = eventData;

    // emit the filter state
    this.eventService.eventFilterObservable.next({ orgCode: this.filterOrgCode, eventCategory: this.selectedTab });
  }

}
