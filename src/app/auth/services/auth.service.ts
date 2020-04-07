import { Injectable } from '@angular/core';
import {AlertController, LoadingController, Platform} from '@ionic/angular';
import {Observable} from 'rxjs';

import {AngularFireAuth} from '@angular/fire/auth';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase';

import {Storage} from '@ionic/storage';

import {UserModel} from '../../models/user.model';

import {UserService} from '../../shared-services/user.service';
import {DatabaseService} from '../../shared-services/database.service';

import {environment} from '../../../environments/environment';

// In our app, a user is one who's details has been stored in DB. So if a user is part of the user pool of firebase authentication
// and it's details is not stored in the DB then he is still not a user of the app. Whenever it tries to sign up it will be given
// an error message saying that you have to first sign up.

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Observable for user auth state
  userAuthObservable: Observable<firebase.User>;

  constructor(private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private angularFireAuth: AngularFireAuth,
              private googlePlus: GooglePlus,
              private platform: Platform,
              private userService: UserService,
              private databaseService: DatabaseService,
              private storage: Storage) {

    this.userAuthObservable = this.angularFireAuth.authState;
  }


  // sign out and then delete the user data that was stored in device
  public async logout(): Promise<void> {
    await this.angularFireAuth.auth.signOut();
    await this.userService.deleteUser();
    if (this.platform.is('hybrid')) {
      await this.googlePlus.logout();
    }
  }

  // creates new user in backend
  public async signup(user: UserModel): Promise<void> {
    if (this.platform.is('hybrid')) {
      await this.androidSignup(user);
    } else {
      await this.browserSignup(user);
    }
  }

  // sign up process when using android device
  private async androidSignup(user: UserModel): Promise<void> {
    // get the user obj from device's google account
    const userObj: any = await this.getUserObj();

    // check if this email is already not been used otherwise throw error
    const isExistingUser = await this.databaseService.getUserWeb(userObj.email);
    if (isExistingUser) {
      throw new Error('User Already Exist! Login Instead.');
    }

    // sign up this new user in our app and store user's details in DB and in device
    const userCredential: firebase.auth.UserCredential = await this.createOrSignInUser(userObj);
    await this.storeUserNative(user, userCredential);
    await this.databaseService.storeUserWeb(await this.userService.getUserNative());
  }

  private async browserSignup(user: UserModel): Promise<void> {
    const userCredential = await this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const isExistingUser = await this.databaseService.getUserWeb(userCredential.user.email);
    if (isExistingUser) {
      throw new Error('User Already Exist! Login Instead.');
    }
    await this.storeUserNative(user, userCredential);
    await this.databaseService.storeUserWeb(await this.userService.getUserNative());
  }

  public async login(): Promise<void> {
    if (this.platform.is('hybrid')) {
      await this.androidLogin();
    } else {
      await this.browserLogin();
    }
  }

  private async browserLogin() {
    const userCredential: any = await this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = await this.databaseService.getUserWeb(userCredential.user.email);
    if (!user) {
      throw new Error('User Not Found! Signup Instead.');
    }
    await this.userService.storeUserNative(user);
    await this.storage.set('accessToken', userCredential.credential.accessToken);
  }

  private async androidLogin() {
    // get the user obj from device's google account and try to find the user in DB
    const userObj: any = await this.getUserObj();
    const user: UserModel = await this.databaseService.getUserWeb(userObj.email);

    // throw error if user is not present in DB
    if (!user) {
      throw new Error('User Not Found! Signup Instead.');
    }

    // save the user details in device and sign in user in our app
    await this.userService.storeUserNative(user);
    await this.createOrSignInUser(userObj);
  }

  public async silentLogin(): Promise<void> {
    if (this.platform.is('hybrid')) {
      await this.androidSilentLogin();
    } else {
      await this.browserSilentLogin();
    }
  }

  private async browserSilentLogin(): Promise<void> {
    // get the access token stored in browser's temp storage(IndexedDB, localstorage etc) and sign in user in our app
    const accessToken = await this.storage.get('accessToken');
    await firebase.auth.GoogleAuthProvider.credential(accessToken);
  }

  private async androidSilentLogin(): Promise<void> {
    // get the user obj from device's google account without prompting for permission
    // this will only succeed if user has given permission explicitly in previous interaction with app
    const userObj: any = await this.googlePlus.trySilentLogin({
      webClientId: environment.webClientId,
      scopes: 'profile email'
    });
    // then sign in user using email got from user obj
    await this.angularFireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(userObj.idToken));
  }

  private async getUserObj(): Promise<any> {
    const gplusUser: any = await this.googlePlus.login({
      webClientId: environment.webClientId,
      scopes: 'profile email',
    });

    return gplusUser;
  }

  // it creates a new user in backend if it does not exist already or just signs in this existing user.
  private async createOrSignInUser(userObj: any): Promise<firebase.auth.UserCredential>  {
    return await this.angularFireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(userObj.idToken));
  }

  private async storeUserNative(user: UserModel, userCredential: firebase.auth.UserCredential): Promise<void> {
    user.email = userCredential.user.email;
    user.displayName = userCredential.user.displayName;
    user.photoURL = userCredential.user.photoURL;
    user.uid = userCredential.user.uid;
    await this.userService.storeUserNative(user);
  }

}
