import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';

import {AngularFirestore} from '@angular/fire/firestore';

import {NoticeModel} from '../models/notice.model';

import {UserService} from '../../../shared-services/user.service';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  noticesObservable: Observable<NoticeModel[]>;

  branchSpecificNotices: NoticeModel[] = [];
  allNotices: NoticeModel[] = [];

  constructor(private angularFirestore: AngularFirestore,
              private userService: UserService) {
    this.noticesObservable = this.angularFirestore.collection<NoticeModel>('notices').valueChanges();
    this.noticesObservable.subscribe((notices) => {
      this.updateNotices(notices);
    });
  }

  updateNotices(notices: NoticeModel[]): void {
    this.branchSpecificNotices = notices.filter((notice) => notice.org.code === this.userService.user.branch);
    this.allNotices = notices.filter((notice) => notice.org.code !== this.userService.user.branch);

    this.branchSpecificNotices = this.sortNotices(this.branchSpecificNotices);
    this.allNotices = this.sortNotices(this.allNotices);
  }

  sortNotices(notices: NoticeModel[]): NoticeModel[] {
    return notices.sort((a, b) => {
      if (a.startDate > b.startDate) { return 1; } else if (a.startDate === b.startDate) { return 0; } else { return -1; }
    });
  }

  getBranchSpecificNotices(): NoticeModel[] {
    return [...this.branchSpecificNotices];
  }

  getAllNotices(): NoticeModel[] {
    return [...this.allNotices];
  }

  getNoticesByOrg(orgCode: string): NoticeModel[] {
    return this.allNotices.filter(notice => notice.org.code === orgCode);
  }
}
