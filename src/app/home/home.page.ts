import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';

import {AuthService} from '../auth/services/auth.service';
import {UserService} from '../shared-services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authService: AuthService,
              private userService: UserService,
              private loadingController: LoadingController,
              private alertCtrl: AlertController) {}

  // tries silent login when user credential is available(i.e, not the first time login)
  async ngOnInit() {
    this.userService.hasUserNative().then(async (hasUser) => {
      if (hasUser) {
        const loadCtrl = await this.loadingController.create({ message: 'Loading...' });
        await loadCtrl.present();
        await this.authService.silentLogin().then(async () => {
          await loadCtrl.dismiss();
        }).catch(async (err) => {
          await loadCtrl.dismiss();
          this.alertCtrl.create({ header: 'Error', message: err.message || 'Unknown error while logging out' })
              .then(alertEle => alertEle.present());
        });
      }
    });
  }
}
