import { Component, OnInit } from '@angular/core';
import {ORG_CODE} from '../../types/types';
import {OrgModel} from '../../models/org.model';
import {orgsMapping} from '../../data/orgs.data';
import {BlogService} from './services/blog.service';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {

  isFilterActive = false;
  chipText: ORG_CODE;
  filterOrgCode: ORG_CODE;

  filter: OrgModel[] = orgsMapping.getOrgs();

  constructor(private blogService: BlogService) {}

  ngOnInit() {
  }

  onChipRemove(): void {
    // make chip invisible and filter button visible
    this.isFilterActive = false;

    // make filterOrgCode null as now we are not filtering blogs on any org. also emit the filter state
    this.filterOrgCode = null;
    this.blogService.blogFilterObservable.next(this.filterOrgCode);
  }

  onFilterSelect(event: any): void {
    // make chip visible and filter button invisible
    this.isFilterActive = true;

    // extract the selected org's code and assign it to chip text and filterOrgCode
    const eventData: ORG_CODE = event.detail.value;
    this.chipText = eventData;
    this.filterOrgCode = eventData;

    // emit the filter state
    this.blogService.blogFilterObservable.next(this.filterOrgCode);
  }

}
