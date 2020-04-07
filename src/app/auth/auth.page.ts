import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import semesters from '../data/semester.data';

import {BranchModel} from '../models/branch.model';
import branches from '../data/branch.data';

import {AuthService} from './services/auth.service';
import {UserModel} from '../models/user.model';
import {Router} from '@angular/router';
import {BRANCH_CODE, SEMESTER_CODE} from '../types/types';
import {AlertController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form: FormGroup;
  semesters: { code: SEMESTER_CODE }[] = semesters;
  branches: BranchModel[] = branches;

  constructor(private authService: AuthService,
              private router: Router,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
    console.log('auth module started');
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      semester: new FormControl(null, [Validators.required]),
      branch: new FormControl(null, [Validators.required])
    });
  }

  // handler for login button
  async onLogin(): Promise<void> {
    // show spinner while logging in
    const spinner = await this.loadingCtrl.create({ message: 'Signing in...' });
    await spinner.present();

    this.authService.login()
        .then(async () => {
          // dismiss spinner, alert the user for successful login and navigate to home
          await spinner.dismiss();
          this.alertCtrl
              .create({header: 'Login Successful!', message: 'Welcome Back To VCET Essentials!', buttons: [{role: 'cancel', text: 'OK'}]})
              .then((a) => a.present());
          this.router.navigate(['/', 'home']);
        })
        .catch(async err => {
          // dismiss the spinner and alert the user for unsuccessful login
          await spinner.dismiss();
          this.alertCtrl.create({ header: 'Error', message: err.message || 'Unknown Error!' }).then(alert => alert.present());
        });
  }

  // handler for signup button
  async onSignup(): Promise<void> {
    // extract all the user details from the form and create a user object
    const firstName: string = this.form.get('firstName').value;
    const lastName: string = this.form.get('lastName').value;
    const branch: BRANCH_CODE = this.form.get('branch').value;
    const semester: SEMESTER_CODE = this.form.get('semester').value;
    const user = new UserModel(firstName, lastName, branch, semester, null, null, null, null);

    // show spinner while user is signing up
    const spinner = await this.loadingCtrl.create({ message: 'Signing up...' });
    await spinner.present();

    this.authService.signup({ ...user })
        .then(async () => {
          // upon successful sign up, dismiss the spinner, alert user via alert card and navigate to home
          await spinner.dismiss();
          this.alertCtrl
              .create({header: 'Signup Successful!', message: 'Welcome to VCET Essentials!', buttons: [{role: 'cancel', text: 'OK'}]})
              .then((a) => a.present());
          await this.router.navigate(['/', 'home']);
        })
        .catch(async err => {
          // dismiss the spinner and alert user about unsuccessful login
          await spinner.dismiss();
          this.alertCtrl.create({ header: 'Error', message: err.message || 'Unable To Store User Data In Database' })
              .then(alert => alert.present());
        });
  }

}
