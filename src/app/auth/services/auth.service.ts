import { Injectable } from '@angular/core';
import {AlertController, LoadingController, Platform} from '@ionic/angular';
import {Observable} from 'rxjs';

import {AngularFireAuth} from '@angular/fire/auth';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase';

import {UserModel} from '../models/user.model';

import {UserService} from '../../shared-services/user.service';
import {DatabaseService} from '../../shared-services/database.service';

import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private angularFireAuth: AngularFireAuth,
              private googlePlus: GooglePlus,
              private platform: Platform,
              private userService: UserService,
              private databaseService: DatabaseService) {
    this.userAuthObservable = this.angularFireAuth.authState;

    this.userService.hasUserNative().then((hasUser) => {
      if (hasUser) {
        this.silentLogin();
      }
    });
  }

  userAuthObservable: Observable<firebase.User>;

  public async logout(): Promise<void> {
    const spinner = await this.loadingCtrl.create({ message: 'Logging Out...' });
    await spinner.present();

    try {
      await this.googlePlus.logout();
      await this.userService.deleteUser();
      await this.angularFireAuth.auth.signOut();
    } catch (err) {
      this.alertCtrl.create({ header: 'Error', message: err.message || 'Unable To Logout Due To Unknown Error!' })
          .then(alert => alert.present());
    }
    await spinner.dismiss();
  }

  public async signup(user: UserModel): Promise<boolean> {
    const spinner = await this.loadingCtrl.create({ message: 'Signing up...' });
    await spinner.present();

    try {
      const userObj: any = await this.getUserObj();
      if (await this.createUser(userObj)) {
        await this.databaseService.getUserWeb(userObj.email)
            .then((value) => {
              if (value) {
                throw new Error('User Already Exist! Login Instead.');
              }
            });
        await this.storeUserNative(user, userObj);
        await this.databaseService.storeUserWeb(await this.userService.getUserNative() as UserModel);

        this.alertCtrl
            .create({header: 'Signup Successful!', message: 'Welcome to VCET Essentials!', buttons: [{role: 'cancel', text: 'OK'}]})
            .then((a) => a.present());
        await spinner.dismiss();

        return true;
      }
    } catch (err) {
      this.alertCtrl.create({ header: 'Error', message: err.message || 'Unable To Store User Data In Database' })
          .then(alert => alert.present());
      await spinner.dismiss();

      return false;
    }
  }

  public async login(): Promise<boolean> {
    const spinner = await this.loadingCtrl.create({ message: 'Signing in...' });
    await spinner.present();

    try {
      const userObj: any = await this.getUserObj();
      if (await this.createUser(userObj)) {
        const user: UserModel | void = await this.databaseService.getUserWeb(userObj.email);
        if (!user) {
          throw new Error('User Not Found! Signup Instead.');
        }
        await this.userService.storeUserNative(user);

        await this.alertCtrl
            .create({header: 'Login Successful!', message: 'Welcome Back To VCET Essentials!', buttons: [{role: 'cancel', text: 'OK'}]})
            .then((a) => a.present());
        await spinner.dismiss();

        return true;
      }
    } catch (err) {
      this.alertCtrl.create({ header: 'Error', message: err.message || 'Unknown Error!' }).then(alert => alert.present());
      await spinner.dismiss();

      return false;
    }
  }

  public async silentLogin(): Promise<void> {
    try {
      const userObj: any = await this.googlePlus.trySilentLogin({
        webClientId: environment.webClientId,
        scopes: 'profile email'
      });
      await this.angularFireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(userObj.idToken));
    } catch (err) {
      this.alertCtrl.create({header: 'Error', message: 'No Internet Connection or Slow Network!'}).then(alert => alert.present());
    }
  }

  private async getUserObj(): Promise<any> {
    const gplusUser: any = await this.googlePlus.login({
      webClientId: environment.webClientId,
      scopes: 'profile email',
    });

    return gplusUser;
  }

  private async createUser(userObj: any): Promise<firebase.auth.UserCredential | void> {
    return await this.angularFireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(userObj.idToken));
  }

  private async storeUserNative(user: UserModel, userObj: any): Promise<void> {
    user.email = userObj.email;
    user.displayName = userObj.displayName;
    user.photoURL = userObj.imageUrl;
    user.uid = userObj.userId;
    await this.userService.storeUserNative(user);
  }

}
