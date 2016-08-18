// Angular
import { Component } from '@angular/core';
// Services
import { PostService } from './services/post.service';
import { Post } from './models/post.model';

@Component({
  selector: 'my-app',
  template: `
    <div *ngIf="isDataLoaded">
      <table-component [post]="post"></table-component>
    </div>
    `
})
export class AppComponent {
  public isDataLoaded: boolean = false; 
  public post: Post;
  constructor(public postService: PostService) {}
  ngOnInit(): void {
    this.postService.getPost()
    .then((post: any) => {
      this.post = new Post(post);
      this.isDataLoaded = true;
    });
  }
}