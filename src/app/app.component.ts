import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { Platform } from '@ionic/angular';
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
    private router: Router
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

  onLogout() {
    this.authService.logout()
        .then(() => this.router.navigate(['/', 'auth']));
  }
}
