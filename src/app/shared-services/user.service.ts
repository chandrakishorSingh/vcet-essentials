import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import {UserModel} from '../models/user.model';
import {AlertController} from '@ionic/angular';
import {BRANCH_CODE, SEMESTER_CODE} from '../types/types';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // using observable for communicating user data as creating user from local storage takes time
  public userSubject: Subject<UserModel> = new Subject<UserModel>();
  private user: UserModel = null;

  constructor(private storage: Storage,
              private alertController: AlertController) {
    this.init();
  }

  // check if user data is present in local storage. if it is then retrieve it and create a user obj
  private async init(): Promise<void> {
    await this.storage.ready();
    if (await this.hasUserNative()) {
      await this.initializeUser();
    }
  }

  // store the given user data in local storage and init user obj using it
  public async storeUserNative(user: UserModel): Promise<void> {
    // delete previous user data first then store new data
    await this.storage.clear();
    for (const key in user) {
      if (key) {
        await this.storage.set(key, user[key]);
      }
    }
    await this.initializeUser();
  }

  // returns a user obj
  public async getUserNative(): Promise<UserModel> {
    await this.storage.ready();
    if (this.user) {
      return {...this.user};
    //  else part is important when this function is called so early that user obj is still not been created since initializeUser()
    //  is called by constructor
    } else {
      await this.initializeUser();
      return {...this.user};
    }
  }

  // removes the existing user data
  public async deleteUser(): Promise<void> {
    if (await this.hasUserNative()) {
      await this.storage.clear();
    } else {
      throw new Error('Can\'t Logout As User Is Not Logged In!');
    }
  }

  // initializes user obj from the data stored in local storage
  private async initializeUser(): Promise<void> {
    const firstName: string = await this.storage.get('firstName');
    const lastName: string = await this.storage.get('lastName');
    const branch: BRANCH_CODE = await this.storage.get('branch');
    const semester: SEMESTER_CODE = await this.storage.get('semester');
    const email: string = await this.storage.get('email');
    const photoURL: string = await this.storage.get('photoURL');
    const displayName: string = await this.storage.get('displayName');
    const uid: string = await this.storage.get('uid');

    this.user = new UserModel(firstName, lastName, branch, semester, email, photoURL, displayName, uid);
    this.userSubject.next(this.user);
    console.log('user created');
  }

  // determines whether the device has saved the user data or not
  async hasUserNative(): Promise<boolean> {
    return await this.storage.get('semester') !== null;
  }
}
