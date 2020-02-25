import {Component, Input, OnInit} from '@angular/core';

import orgs from '../../../data/orgs.data';

import {NoticeModel} from '../models/notice.model';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.scss'],
})
export class NoticeListComponent implements OnInit {

  @Input() notices: NoticeModel[] = [];
  @Input() filterOrgCode: string = null;

  orgs = orgs;

  constructor() { }

  ngOnInit() {}

  onPDFClick(url: string): void {
    window.open(url);
  }

}
