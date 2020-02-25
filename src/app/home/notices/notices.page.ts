import { Component, OnInit } from '@angular/core';

import {OrgFilterModel} from '../shared-models/orgFilter.model';
import {NoticeModel} from './models/notice.model';

import {UserService} from '../../shared-services/user.service';
import {NoticeService} from './services/notice.service';

import orgFilter from '../shared-data/orgFilter.data';
import orgs from '../../data/orgs.data';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.page.html',
  styleUrls: ['./notices.page.scss'],
})
export class NoticesPage implements OnInit {

  selectedTab: 'branchSpecific' | 'allNotices' = 'branchSpecific';
  isFilterActive = false;
  chipText: string = null;
  filterOrgCode: string = null;
  branch: string = null;

  branchSpecificNotices: NoticeModel[] = [];
  allNotices: NoticeModel[] = [];

  filter: OrgFilterModel[] = orgFilter.filter((org) => org.value !== this.userService.user.branch);

  constructor(private userService: UserService,
              private noticeService: NoticeService) {}

  ngOnInit() {
    this.branch = this.userService.user.branch;

    this.branchSpecificNotices = this.noticeService.getBranchSpecificNotices();
    this.allNotices = this.noticeService.getAllNotices();

    this.noticeService.noticesObservable.subscribe(() => {
      this.branchSpecificNotices = this.noticeService.getBranchSpecificNotices();
      this.allNotices = this.noticeService.getAllNotices();
    });
  }

  onTabChange(event: any): void {
    this.selectedTab = event.detail.value;
    this.onChipPress();
  }

  onChipPress(): void {
    if (this.isFilterActive) {
      this.isFilterActive = false;
      this.filterOrgCode = null;
      this.chipText = null;

      this.allNotices = this.noticeService.getAllNotices();
    }
  }

  onFilterChange(event: any): void {
    this.isFilterActive = true;
    this.filterOrgCode = event.detail.value;
    this.chipText = orgs[event.detail.value].code;

    this.allNotices = this.noticeService.getNoticesByOrg(event.detail.value);
  }

}
