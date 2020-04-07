import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {orgsMapping} from '../../../data/orgs.data';

import {NoticeModel} from '../../../models/notice.model';
import {ORG_CODE, ORG_NAME, ORG_TYPE} from '../../../types/types';
import {NoticeService} from '../services/notice.service';
import {OrgModel} from '../../../models/org.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.scss'],
})
export class NoticeListComponent implements OnInit, OnDestroy {

  notices: NoticeModel[] = [];
  filterOrgCode: ORG_CODE = null;

  org: OrgModel;

  noticesSubscription: Subscription;
  noticeFilterSubscription: Subscription;

  constructor(private noticesService: NoticeService) {}

  ngOnInit() {
    console.log('notice-list component started.');
    console.log('filterOrgCode notice-list', this.filterOrgCode);
    console.log('notices notice-list', this.notices);

    // get all notices
    this.notices = this.noticesService.getAllNotices();
    // subscribe to noticesObservable so that changes in DB will be reflected
    this.noticesSubscription = this.noticesService.noticesObservable.subscribe((notices) => {
      this.notices = notices;
    });
    // subscribe to changes in filter option. this could be null or any value of type ORG_CODE.
    // get all notices or org specific notices for above values respectively
    this.noticesSubscription = this.noticesService.noticeFilterObservable.subscribe((filterOrgCode) => {
      this.filterOrgCode = filterOrgCode;
      if (this.filterOrgCode) {
        this.notices = this.noticesService.getNoticesByOrg(this.filterOrgCode);
        this.org = orgsMapping.getOrgByCode(this.filterOrgCode);
      } else {
        this.notices = this.noticesService.getAllNotices();
        this.org = null;
      }
    });
  }

  onPDFClick(url: string): void {
    window.open(url);
  }

  ngOnDestroy() {
    this.noticesSubscription.unsubscribe();
    this.noticeFilterSubscription.unsubscribe();
  }

}
