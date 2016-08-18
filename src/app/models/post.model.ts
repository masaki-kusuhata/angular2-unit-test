export class Post {
  public title: number;
  public author: string;

  constructor(post: any) {
    this.title = post.title;
    this.author = post.author;
  }
}