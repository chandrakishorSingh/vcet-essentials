import { Component, OnInit } from '@angular/core';
import {NoticeModel} from '../../models/notice.model';

import {UserService} from '../../shared-services/user.service';
import {NoticeService} from './services/notice.service';

import {orgsMapping} from '../../data/orgs.data';
import {OrgModel} from '../../models/org.model';
import {BRANCH_CODE, ORG_CODE} from '../../types/types';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.page.html',
  styleUrls: ['./notices.page.scss'],
})
export class NoticesPage implements OnInit {

  selectedTab: 'branchSpecific' | 'allNotices' = 'branchSpecific';
  isFilterActive = false;
  chipText: string = null;
  filterOrgCode: ORG_CODE = null;
  branch: BRANCH_CODE = null;

  filter: OrgModel[] = [];

  constructor(private userService: UserService,
              private noticeService: NoticeService) {}

  async ngOnInit() {
    // initialize vars: get all the orgs and the branch code of student
    const user = await this.userService.getUserNative();
    this.filter = orgsMapping.orgs;
    this.branch = user.branch;

    // initially we will on allNotices tab. emit this data so that NoticesList will have all notices
    this.noticeService.noticeFilterObservable.next(null);
  }

  onTabChange(event: any): void {
    // extract the selected tab value and assign it to selectedTab
    const eventData = event.detail.value;
    this.selectedTab = eventData;
    // if filter is active then remove it when moving from one tab to another
    if (this.isFilterActive) {
      this.onChipRemove();
    }
    // if we are going to branchSpecific tab then filter notices by student's branch else don't filter
    if (this.selectedTab === 'branchSpecific') {
      this.noticeService.noticeFilterObservable.next(this.branch);
    } else {
      this.noticeService.noticeFilterObservable.next(null);
    }
  }

  onChipRemove(): void {
    // make chip invisible and filter button visible
    this.isFilterActive = false;

    // make filterOrgCode null as now we are not filtering notices on any org. also emit the filter state
    this.filterOrgCode = null;
    this.noticeService.noticeFilterObservable.next(this.filterOrgCode);
  }

  onFilterSelect(event: any): void {
    // make chip visible and filter button invisible
    this.isFilterActive = true;

    // extract the selected org's code and assign it to chip text and filterOrgCode
    const eventData: ORG_CODE = event.detail.value;
    this.chipText = eventData;
    this.filterOrgCode = eventData;

    // emit the filter state
    this.noticeService.noticeFilterObservable.next(this.filterOrgCode);
  }

}
