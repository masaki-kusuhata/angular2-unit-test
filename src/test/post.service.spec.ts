import {
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http,
  HttpModule
} from '@angular/http';
import {
  provide,
  ReflectiveInjector
} from '@angular/core';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';
import {
  inject,
  async,
  TestBed
} from '@angular/core/testing';

import { PostService } from './../app/services/post.service';

describe('MockBackend: TestService', () => {
  beforeEach(() => {
    // Сделаем все нужные тестовые сервисы
    TestBed.configureTestingModule({
      providers: [
        PostService,
        MockBackend,
        BaseRequestOptions,
        { 
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('returns the PostService', async(inject([PostService, MockBackend], (ps: PostService, mockBackEnd: MockBackend) => {
    mockBackEnd.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({ body: '{"title": "TestPost", "author": "Admin"}'})));
    });

    return ps.getPost()
      .then((data) => {
        expect(data).toEqual({"title": "TestPost", "author": "Admin"});
      });
  })));
});
