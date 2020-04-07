import { Component } from '@angular/core';
import {Router} from '@angular/router';

import {AlertController, LoadingController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {AuthService} from './auth/services/auth.service';
import {UserService} from './shared-services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  photoURL: string = null;
  displayName: string = null;
  isAuth = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();

    this.authService.userAuthObservable.subscribe((userObj) => {
      if (userObj) {
        this.isAuth = true;
        this.displayName = userObj.displayName;
        this.photoURL = userObj.photoURL;
      } else {
        this.isAuth = false;
        this.displayName = null;
        this.photoURL = null;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async onLogout() {
    const spinner = await this.loadingCtrl.create({ message: 'Logging Out...' });
    await spinner.present();
    this.authService.logout()
        .then(async () => {
          await spinner.dismiss();
          this.router.navigate(['/', 'auth']);
        })
        .catch(async (err) => {
          await spinner.dismiss();
          this.alertCtrl
              .create({ header: 'Error', message: err.message || 'Unable To Logout Due To Unknown Error!' })
              .then(alert => alert.present());
        });
  }
}
