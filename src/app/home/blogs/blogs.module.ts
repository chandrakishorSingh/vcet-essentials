import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BlogsPage } from './blogs.page';
import {BlogListComponent} from './blog-list/blog-list.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsPage
  },
  {
    path: ':id',
    component: BlogDetailComponent
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
    BlogsPage,
    BlogListComponent,
    BlogDetailComponent
  ]
})
export class BlogsPageModule {}
