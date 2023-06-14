import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = 'relativv DEV | Portfolio';

  constructor(
    private router: Router,
    private meta: Meta
  ) {
    this.meta.addTags([
      {name: 'author', content: 'Robin Schulte'},
      {name: 'description', content: 'Home page of Robin Schulte aka relativv, a full stack developer from Germany.'},
      {name: 'keywords',
        content: 'relativv, relativv dev, relativvdev, relativv.dev, relativv-dev, relativv_dev, relativv-dev.de, relativv_dev.de, relativv-dev.com, relativv_dev.com, relativv-dev.eu, relativv_dev.eu, relativv-dev.org, relativv_dev.org, relativv-dev.net, relativv_dev.net, relativv-dev.info, relativv_dev.info, relativv-dev.io, relativv_dev.io, relativv-dev.dev, relativv_dev.dev, relativv-dev.de, relativv_dev.de, relativv-dev.com, relativv_dev.com, relativv-dev.eu, relativv_dev.eu, relativv-dev.org, relativv_dev.org, relativv-dev.net, relativv_dev.net, relativv-dev.info, relativv_dev.info, relativv-dev.io, relativv_dev.io, relativv-dev.dev, relativv_dev.dev, robin-schulte.de, robin-schulte.eu, robin-schulte.dev, robin-schulte-dev.de, robin-schulte-dev.eu, robin-schulte-dev.dev, robin-schulte-dev.com, robin-schulte-dev.net, robin-schulte-dev.org, robin-schulte-dev.info, robin-schulte-dev.io, robin-schulte-dev.dev, robin-schulte-dev.com, robin-schulte-dev.net, robin-schulte-dev.org, robin-schulte-dev.info, robin-schulte-dev.io, angular, symfony, fullstack, software_engineer, software_developer, web_developer, web_development'
      },
      {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      {name: 'date', content: '2023-06-14', scheme: 'YYYY-MM-DD'},
      {charset: 'UTF-8'},
    ]);
  }
}
