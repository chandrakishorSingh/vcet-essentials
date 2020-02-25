import {Component, Input, OnInit} from '@angular/core';

import orgs from '../../../data/orgs.data';

import {EventModel} from '../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {

  @Input() eventCategory: 'current' | 'upcoming';
  @Input() events: EventModel[] = [];
  @Input() filterOrgCode: string = null;

  orgs = orgs;

  constructor() { }

  ngOnInit() {}

}
