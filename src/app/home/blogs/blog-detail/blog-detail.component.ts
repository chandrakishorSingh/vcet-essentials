import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../services/blog.service';
import {BlogModel} from '../../../models/blog.model';

import socialMediaIcons from '../../../data/socialMediaIcons.data';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {

  blog: BlogModel;
  socialMediaIcons = socialMediaIcons;

  constructor(private activatedRoute: ActivatedRoute,
              private blogService: BlogService) {}

  ngOnInit() {
    // extract the index and event category from the url and get necessary event obj
    const index = +this.activatedRoute.snapshot.paramMap.get('id');

    this.blog = this.blogService.getBlogByIndex(index);
  }

  onSocialMediaClick(url: string): void {
    window.open(url);
  }

}
