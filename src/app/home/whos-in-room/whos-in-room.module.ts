import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WhosInRoomPage } from './whos-in-room.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [WhosInRoomPage]
})
export class WhosInRoomPageModule {}
