import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {AngularFirestore} from '@angular/fire/firestore';

import {EventModel} from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventsObservable: Observable<EventModel[]>;

  currentEvents: EventModel[] = [];
  upcomingEvents: EventModel[] = [];

  constructor(private angularFirestore: AngularFirestore) {
    this.eventsObservable = this.angularFirestore.collection<EventModel>('events').valueChanges();
    this.eventsObservable.subscribe((events) => {
      this.updateEvents(events);
    });
  }

  updateEvents(events: EventModel[]): void {
    this.currentEvents = events.filter((event) => (new Date(event.startDate) <= new Date()) && (new Date() <= new Date(event.endDate)));
    this.upcomingEvents = events.filter((event) => new Date() < new Date(event.startDate));

    this.currentEvents = this.sortEvents(this.currentEvents);
    this.upcomingEvents = this.sortEvents(this.upcomingEvents);
  }

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

  getCurrentEventsByOrg(orgCode: string): EventModel[] {
    return this.currentEvents.filter(event => event.org.code === orgCode);
  }

  getUpcomingEventsByOrg(orgCode: string): EventModel[] {
    return this.upcomingEvents.filter(event => event.org.code === orgCode);
  }

  getEventByEventCategoryAndIndex(eventCategory: 'current' | 'upcoming', index: number): EventModel {
    return eventCategory === 'current' ? {...this.currentEvents[index]} : {...this.upcomingEvents[index]};
  }
}
