import {PostService} from './../app/services/post.service';
import {Observable} from 'rxjs';

export class MockPostService extends PostService {
//   constructor() {
//     // Унаследуемся от реального сервиса
//     super();
//   }
  // Перезапишет реальный метод сервиса на копию, чтобы не делать ненужных запросов
  getPost() {
  // Поскольку Http использует Observable, нам необходимо сделать тестовый Observable обьект.
    return Observable.of({title: 'TestPost', author: 'Admin'});
  }
}