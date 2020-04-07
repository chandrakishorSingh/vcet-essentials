import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

import {HomeRoutingModule} from './home-routing.module';
import {UserService} from '../shared-services/user.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule
  ],
  declarations: [HomePage],
  exports: [
  ],
  providers: [
      UserService
  ]
})
export class HomePageModule {}
