import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {orgsMapping} from '../../../data/orgs.data';

import {EventModel} from '../../../models/event.model';
import {EVENT_CATEGORY, ORG_CODE, ORG_NAME, ORG_TYPE} from '../../../types/types';
import {OrgModel} from '../../../models/org.model';
import {EventService} from '../services/event.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit, OnDestroy {

  @Input() eventCategory: EVENT_CATEGORY;
  eventsFilterSubscription: Subscription;
  eventsSubscription: Subscription;
  events: EventModel[] = [];
  org: OrgModel;

  constructor(private eventsService: EventService) {}

  ngOnInit() {
    // get all events and subscribe to changes 'events' in DB
    this.events = this.eventsService.getEventsByEventCategory(this.eventCategory);
    this.eventsSubscription = this.eventsService.eventsObservable.subscribe(() => {
      this.events = this.eventsService.getEventsByEventCategory(this.eventCategory);
    });

    // subscribe to changes in filter state and update events, org and eventCategory accordingly
    this.eventsFilterSubscription = this.eventsService.eventFilterObservable.subscribe((filterState) => {
      this.org = orgsMapping.getOrgByCode(filterState.orgCode);
      this.eventCategory = filterState.eventCategory;
      if (this.org) {
        this.events = this.eventsService.getEventsByEventCategoryAndOrg(this.eventCategory, filterState.orgCode);
      } else {
        this.events = this.eventsService.getEventsByEventCategory(this.eventCategory);
      }
    });
  }

  ngOnDestroy(): void {
    this.eventsFilterSubscription.unsubscribe();
    this.eventsSubscription.unsubscribe();
  }

}
