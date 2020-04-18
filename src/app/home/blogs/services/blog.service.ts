import {Injectable} from '@angular/core';
import {BlogModel} from '../../../models/blog.model';
import {Observable, Subject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {reduce} from 'rxjs/operators';
import {ORG_CODE} from '../../../types/types';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: BlogModel[] = [];
  blogsObservable: Observable<BlogModel[]> = new Observable<BlogModel[]>();
  blogFilterObservable: Subject<ORG_CODE> = new Subject<ORG_CODE>();

  constructor(private afFirestore: AngularFirestore) {
    this.blogsObservable = this.afFirestore.collectionGroup<BlogModel>('blogs').valueChanges().pipe(this.sortBlogsOperator());
    this.blogsObservable.subscribe(blogs => {
      this.blogs = blogs;
      console.log(this.blogs);
    });
  }

  sortBlogsOperator() {
    return (source: Observable<BlogModel[]>) => {
      return new Observable<BlogModel[]>(observer => {
        return source.subscribe({
          next(blogs) {
            blogs = blogs.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1);
            observer.next(blogs);
          },
          error(err) { observer.error(err); },
          complete() { observer.complete(); }
        });
      });
    };
  }

  getBlogs(): BlogModel[] {
    return [...this.blogs];
  }

  getBlogsByOrg(orgCode: ORG_CODE): BlogModel[] {
    return this.blogs.filter(blog => blog.org.code === orgCode);
  }

  getBlogByIndex(index: number): BlogModel {
    return {...this.blogs[index]};
  }

}
