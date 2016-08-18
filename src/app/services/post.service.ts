import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from '../models/post.model';

@Injectable()
export class PostService {
  constructor(private http: Http) {}
  public getPost(): any {
    return this.http.get('/built/app/post.json')
      .toPromise()
      .then((res: any) => res.json())
      .catch();
  }
}
