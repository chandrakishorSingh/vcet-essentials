import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventsPage } from './events.page';

import {EventListComponent} from './event-list/event-list.component';
import {EventDetailComponent} from './event-detail/event-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  },
    {
        path: ':eventCategory/:id',
        component: EventDetailComponent
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
      EventsPage,
      EventListComponent,
      EventDetailComponent
  ]
})
export class EventsPageModule {}
