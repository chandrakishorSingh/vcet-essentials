import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

import { take } from 'rxjs/operators';

import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private angularFirestore: AngularFirestore) {
    console.log('database service started');
  }

  async storeUserWeb(user: UserModel): Promise<void> {
    const users = await this.angularFirestore.collection<UserModel>('users');
    await users.add(user);
  }

  async getUserWeb(email: string): Promise<UserModel> {
    const userDoc = this.angularFirestore.collection<UserModel>('users');
    const userObservable = userDoc.valueChanges().pipe(take(1));
    const users: UserModel[] = await userObservable.toPromise();

    return users.find(u => u.email === email);
  }
}
