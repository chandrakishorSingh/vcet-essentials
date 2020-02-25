import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoticesPage } from './notices.page';

import {NoticeListComponent} from './notice-list/notice-list.component';

const routes: Routes = [
  {
    path: '',
    component: NoticesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
      NoticesPage,
      NoticeListComponent
  ]
})
export class NoticesPageModule {}
