import { Component, OnInit } from '@angular/core';

import {EventService} from '../events/services/event.service';

import {EventModel} from '../../models/event.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  events: EventModel[] = [];

  sliderConfig: any = {
    effect: 'flip',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  };

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getCurrentEvents();

    this.eventService.eventsObservable.subscribe(() => {
      this.events = this.eventService.getCurrentEvents();
    });
  }

}
