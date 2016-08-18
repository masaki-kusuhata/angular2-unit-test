import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// Components
import { AppComponent }   from './app.component';
import { TableComponent } from './components/table.component';
// Services
import { PostService } from './services/post.service';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [BrowserModule, HttpModule],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
