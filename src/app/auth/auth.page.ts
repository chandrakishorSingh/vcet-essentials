import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {SemesterModel} from './models/semester.model';
import semesters from './data/semester.data';

import {BranchModel} from './models/branch.model';
import branches from './data/branch.data';

import {AuthService} from './services/auth.service';
import {UserModel} from './models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form: FormGroup;
  semesters: SemesterModel[] = semesters;
  branches: BranchModel[] = branches;

  constructor(private authService: AuthService,
              private router: Router) {
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

  onLogin(): void {
    this.authService.login()
        .then((isAuth) => {
          if (isAuth) {
            this.router.navigate(['/', 'home']);
          }
        });
  }

  onSignup(): void {
    const firstName: string = this.form.get('firstName').value;
    const lastName: string = this.form.get('lastName').value;
    const branch: string = this.form.get('branch').value;
    const semester: string = this.form.get('semester').value;
    const user = new UserModel(firstName, lastName, branch, semester, null, null, null, null);

    this.authService.signup({ ...user })
        .then((isAuth) => {
          if (isAuth) {
            this.router.navigate(['/', 'home']);
          }
        });
  }

}
