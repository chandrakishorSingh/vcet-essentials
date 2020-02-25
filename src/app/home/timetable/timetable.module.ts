import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TimetablePage } from './timetable.page';
import {SharedModule} from '../../shared-module/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TimetablePage
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
  declarations: [TimetablePage]
})
export class TimetablePageModule {}
