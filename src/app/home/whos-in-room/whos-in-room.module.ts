import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WhosInRoomPage } from './whos-in-room.page';
import {SharedModule} from '../../shared-module/shared.module';

const routes: Routes = [
  {
    path: '',
    component: WhosInRoomPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [WhosInRoomPage]
})
export class WhosInRoomPageModule {}
