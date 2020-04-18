import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogModel} from '../../../models/blog.model';
import {BlogService} from '../services/blog.service';
import {Subscription} from 'rxjs';
import {EventModel} from '../../../models/event.model';
import {OrgModel} from '../../../models/org.model';
import {orgsMapping} from '../../../data/orgs.data';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit, OnDestroy {

  blogs: BlogModel[] = [];
  blogsFilterSubscription: Subscription;
  blogsSubscription: Subscription;
  org: OrgModel;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
    this.blogsSubscription = this.blogService.blogsObservable.subscribe((blogs) => {
      this.blogs = blogs;
    });

    // either an ORG_CODE will be emitted or null. get org specific blogs or all blogs in respective cases
    this.blogsFilterSubscription = this.blogService.blogFilterObservable.subscribe((orgCode) => {
      this.org = orgsMapping.getOrgByCode(orgCode);
      if (this.org) {
        this.blogs = this.blogService.getBlogsByOrg(orgCode);
      } else {
        this.blogs = this.blogService.getBlogs();
      }
    });
  }

  ngOnDestroy(): void {
    this.blogsSubscription.unsubscribe();
  }

}
