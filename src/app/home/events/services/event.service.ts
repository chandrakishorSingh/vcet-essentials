import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

import {AngularFirestore} from '@angular/fire/firestore';

import {EventModel} from '../../../models/event.model';
import {EVENT_CATEGORY, EventFilterState, ORG_CODE} from '../../../types/types';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventsObservable: Observable<EventModel[]>;
  eventFilterObservable: Subject<EventFilterState> = new Subject<EventFilterState>();

  private currentEvents: EventModel[] = [];
  private upcomingEvents: EventModel[] = [];

  constructor(private angularFirestore: AngularFirestore) {
    this.eventsObservable = this.angularFirestore.collectionGroup<EventModel>('events').valueChanges();
    this.eventsObservable.subscribe((events) => {
      // console.log(events);
      this.updateEvents(events);
    });
  }

  updateEvents(events: EventModel[]): void {
    this.currentEvents = events.filter((event) => (new Date(event.startDate) <= new Date()) && (new Date() <= new Date(event.endDate)));
    this.upcomingEvents = events.filter((event) => new Date() < new Date(event.startDate));

    this.currentEvents = this.sortEvents(this.currentEvents);
    this.upcomingEvents = this.sortEvents(this.upcomingEvents);
  }

  // sort events in reverse chronological order
  sortEvents(events: EventModel[]): EventModel[] {
    return events.sort((a, b) => {
      if (a.startDate > b.startDate) { return 1; } else if (a.startDate === b.startDate) { return 0; } else { return -1; }
    });
  }

  getCurrentEvents(): EventModel[] {
    return [...this.currentEvents];
  }

  getUpcomingEvents(): EventModel[] {
    return [...this.upcomingEvents];
  }

  // returns all current events by a particular org. used with filter.
  getCurrentEventsByOrg(orgCode: ORG_CODE): EventModel[] {
    return this.currentEvents.filter(event => event.org.code === orgCode);
  }

  // returns all upcoming events by a particular org. used with filter.
  getUpcomingEventsByOrg(orgCode: ORG_CODE): EventModel[] {
    return this.upcomingEvents.filter(event => event.org.code === orgCode);
  }

  // gives a single event of a particular event category by its index. used in EventDetail component
  getEventByEventCategoryAndIndex(eventCategory: EVENT_CATEGORY, index: number): EventModel {
    return eventCategory === 'current' ? {...this.currentEvents[index]} : {...this.upcomingEvents[index]};
  }

  // returns all events of a particular EVENT_CATEGORY(current | upcoming)
  getEventsByEventCategory(eventCategory: EVENT_CATEGORY): EventModel[] {
    return eventCategory === 'current' ? this.getCurrentEvents() : this.getUpcomingEvents();
  }

  // returns all events of a particular EVENT_CATEGORY and of a particular org
  getEventsByEventCategoryAndOrg(eventCategory: EVENT_CATEGORY, orgCode: ORG_CODE): EventModel[] {
    return eventCategory === 'current' ? this.getCurrentEventsByOrg(orgCode) : this.getUpcomingEventsByOrg(orgCode);
  }
}
