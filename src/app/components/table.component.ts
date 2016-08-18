import {Component, Input} from '@angular/core';

@Component({
  selector: 'table-component',
  template: `
  <table>
    <thead>
      <tr>
        <th>Post Title</th>
        <th>Post Author</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>{{ post.title}}</td>
        <td>{{ post.author}}</td>
      </tr>
    </tbody>
  </table>
`})
export class TableComponent {
  @Input() public post: any;
}