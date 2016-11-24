import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
  selector: 'authors',
  template: `
    <h2> This is the list of available authors</h2>
    <ul>
      <li *ngFor="#author of authors">{{author}}</li>
    </ul>
  `,
  providers: [AuthorService]
})
export class AuthorsComponent {
  authors: String [] = [];
  constructor(authorService : AuthorService) {
    this.authors = authorService.getAuthors();
  }
}
