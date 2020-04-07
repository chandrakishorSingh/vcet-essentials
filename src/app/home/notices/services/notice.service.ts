import { Injectable } from '@angular/core';

import {Observable, Subject} from 'rxjs';

import {AngularFirestore} from '@angular/fire/firestore';

import {NoticeModel} from '../../../models/notice.model';

import {UserService} from '../../../shared-services/user.service';
import {ORG_CODE} from '../../../types/types';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  // Observable that observes the 'notices' node in DB and one for notifying changes in this service's notice arr
  // note that noticesObservable observable notifies changes in this service's notice arr while noticesRefObservable notifies
  // about changes in 'notices' node of DB
  private noticesRefObservable: Observable<NoticeModel[]>;
  public noticesObservable: Subject<NoticeModel[]> = new Subject<NoticeModel[]>();
  public noticeFilterObservable: Subject<ORG_CODE> = new Subject<ORG_CODE>();

  private allNotices: NoticeModel[] = [];

  constructor(private angularFirestore: AngularFirestore,
              private userService: UserService) {
    // Initialize notices observable and update local variables upon changes.
    this.noticesRefObservable = this.angularFirestore.collection<NoticeModel>('notices').valueChanges();
    this.noticesRefObservable.subscribe((notices) => {
      this.updateNotices(notices);
    });
  }

  // Updates the local variables upon changes in 'notices' node. After that it
  private async updateNotices(notices: NoticeModel[]) {
    // sort notices in reverse chronological order
    this.allNotices = this.sortNotices(notices);

    // notifies other part of app about changes in notices arr
    this.noticesObservable.next(this.allNotices);
  }

  // Function to sort the notices in reverse chronological order.
  private sortNotices(notices: NoticeModel[]): NoticeModel[] {
    return notices.sort((a, b) => {
      if (a.startDate > b.startDate) { return 1; } else if (a.startDate === b.startDate) { return 0; } else { return -1; }
    });
  }

  // Returns a copy of all notices
  public getAllNotices(): NoticeModel[] {
    return [...this.allNotices];
  }

  // Returns a copy of all notices that are from a particular org(except user's branch)
  public getNoticesByOrg(orgCode: ORG_CODE): NoticeModel[] {
    return [...this.allNotices.filter(notice => notice.org.code === orgCode)];
  }
}
