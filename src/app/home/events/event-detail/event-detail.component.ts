import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {EventService} from '../services/event.service';

import {EventModel} from '../../../models/event.model';

import socialMediaIcons from '../../../data/socialMediaIcons.data';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {

  event: EventModel;
  socialMediaIcons = socialMediaIcons;

  constructor(private activatedRoute: ActivatedRoute,
              private eventService: EventService) { }

  ngOnInit() {
    // extract the index and event category from the url and get necessary event obj
    const index = +this.activatedRoute.snapshot.paramMap.get('id');
    const eventCategory = this.activatedRoute.snapshot.paramMap.get('eventCategory') as 'current' | 'upcoming';

    this.event = this.eventService.getEventByEventCategoryAndIndex(eventCategory, index);
  }

  onSocialMediaClick(url: string): void {
    window.open(url);
  }

}
