import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';

import {AuthService} from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authService: AuthService,
              private loadingController: LoadingController) {
    console.log('Home module started');
  }

  async ngOnInit() {
    const loadCtrl = await this.loadingController.create({ message: 'Loading...' });
    await loadCtrl.present();

    await this.authService.silentLogin();
    await loadCtrl.dismiss();
  }
}
