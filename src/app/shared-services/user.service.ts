import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import {UserModel} from '../auth/models/user.model';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserModel = null;

  constructor(private storage: Storage,
              private alertController: AlertController) {
    console.log('User service started');
    this.init();
  }

  private async init(): Promise<void> {
    if (await this.hasUserNative()) {
      this.initializeUser();
    }
  }

  public async storeUserNative(user: UserModel): Promise<void> {
    await this.storage.clear();
    for (const key in user) {
      if (key) {
        await this.storage.set(key, user[key]);
      }
    }
    await this.initializeUser();
  }

  public async getUserNative(): Promise<UserModel> {
    if (await this.hasUserNative()) {
      return {...this.user};
    } else {
      await this.initializeUser();
      return { ...this.user };
    }
  }

  public async deleteUser(): Promise<void> {
    if (await this.hasUserNative()) {
      await this.storage.clear();
    } else {
      throw new Error('Can\'t Logout As User Is Not Logged In!');
    }
  }

  private async initializeUser(): Promise<void> {
    const firstName: string = await this.storage.get('firstName');
    const lastName: string = await this.storage.get('lastName');
    const branch: string = await this.storage.get('branch');
    const semester: string = await this.storage.get('semester');
    const email: string = await this.storage.get('email');
    const photoURL: string = await this.storage.get('photoURL');
    const displayName: string = await this.storage.get('displayName');
    const uid: string = await this.storage.get('uid');

    this.user = new UserModel(firstName, lastName, branch, semester, email, photoURL, displayName, uid);
  }

  async hasUserNative(): Promise<boolean> {
    return await this.storage.get('semester') !== null;
  }
}
