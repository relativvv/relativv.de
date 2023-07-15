import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  constructor(
    private readonly title: Title,
    private readonly meta: Meta
  ) {
    this.title.setTitle('relativv\'s Portfolio | Home')
    this.meta.updateTag({ name: 'description', content: 'Home component of the portfolio page from Robin Schulte aka relativv, a fullstack software engineer' })
  }
}
