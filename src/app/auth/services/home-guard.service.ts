import { Injectable } from '@angular/core';
import {CanLoad, Route, Router, UrlSegment} from '@angular/router';

import {Observable} from 'rxjs';

import {UserService} from '../../shared-services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad {

  constructor(private userService: UserService,
              private router: Router) {
    console.log('auth guard service started');
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    this.userService.hasUserNative().then((hasUser) => {
      if (!hasUser) {
        this.router.navigate(['/', 'auth']);
      }
    });

    return this.userService.hasUserNative();
  }
}
