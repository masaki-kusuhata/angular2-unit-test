import {Component} from '@angular/core';
// TestComponentBuilder заменили на TestBed, и расширили несколькими методами.
import {TestBed, async} from '@angular/core/testing';
import {Post} from './../app/models/post.model';
import {TableComponent} from './../app/components/table.component';
// Services
import {PostService} from './../app/services/post.service';
import {MockPostService} from './post.service.mock';

import { By }             from '@angular/platform-browser';

// Создаем тестовый компонент и передаем созданные тестовые данные.
@Component({
  selector  : 'test-cmp',
  template  : '<table-component [post]="postMock"></table-component>'
})

class TestCmpWrapper {
  public postMock = new Post({'title': 'TestPost', 'author': 'Admin'});
}

describe("TableComponent", () => {
  // Нововведение - Необходимо создать тестовый модуль, чтобы в нем создать все зависимости.
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestCmpWrapper,
        TableComponent
      ],
      providers: [
        {provide: PostService, useClass: MockPostService}
      ]
    });
  });

  describe('check rendering', () => {
    it('if component is rendered', async(() => {
      // Убрали методы createAsync() на compoleComponents() + createComponent(). Первый - компилит все компоненты, которые присутствуют TestCmpWrapper, второй - создает тестовый компонент. Остальное - не тронули.
      TestBed.compileComponents().then(() => {
        let fixture = TestBed.createComponent(TestCmpWrapper);
        let componentInstance = fixture.componentInstance;
        let nativeElement = fixture.nativeElement;
        
        componentInstance.postMock = new Post({title: 'TestPost', author: 'Admin'});
        fixture.detectChanges();

        let firstTable_1 = fixture.debugElement.query(By.css('tr td:nth-child(1)')).nativeElement;
        expect(firstTable_1.innerText).toBe('TestPost');
        let firstTable_2 = fixture.debugElement.query(By.css('tr td:nth-child(2)')).nativeElement;
        expect(firstTable_2.innerText).toBe('Admin');
      });
    }));
  });
});