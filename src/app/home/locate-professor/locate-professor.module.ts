import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LocateProfessorPage } from './locate-professor.page';

const routes: Routes = [
  {
    path: '',
    component: LocateProfessorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LocateProfessorPage]
})
export class LocateProfessorPageModule {}
