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
    this.meta.addTags([
      {name: 'author', content: 'Robin Schulte'},
      {name: 'description', content: 'Willkommen auf relativv.de! Hier teile ich meine Leidenschaft für Programmieren und Softwareentwicklung. Entdecke meine umfangreichen Erfahrungen und fundierten Kenntnisse in den Bereichen Coding, Softwarearchitektur und innovativen Lösungen. Erfahre mehr über meine Projekte, Erfolge und den Mehrwert, den ich durch maßgeschneiderte Softwarelösungen bieten kann. Tauche ein in meine Welt des Programmierens und lass dich von meinem Fachwissen und meiner Kreativität inspirieren. Gemeinsam können wir die Grenzen der Softwareentwicklung neu definieren.'},
      {name: 'keywords',
        content: 'relativv, relativv dev, relativvdev, relativv.dev, relativv-dev, relativv_dev, relativv-dev.de, relativv_dev.de, relativv-dev.com, relativv_dev.com, relativv-dev.eu, relativv_dev.eu, relativv-dev.org, relativv_dev.org, relativv-dev.net, relativv_dev.net, relativv-dev.info, relativv_dev.info, relativv-dev.io, relativv_dev.io, relativv-dev.dev, relativv_dev.dev, relativv-dev.de, relativv_dev.de, relativv-dev.com, relativv_dev.com, relativv-dev.eu, relativv_dev.eu, relativv-dev.org, relativv_dev.org, relativv-dev.net, relativv_dev.net, relativv-dev.info, relativv_dev.info, relativv-dev.io, relativv_dev.io, relativv-dev.dev, relativv_dev.dev, robin-schulte.de, robin-schulte.eu, robin-schulte.dev, robin-schulte-dev.de, robin-schulte-dev.eu, robin-schulte-dev.dev, robin-schulte-dev.com, robin-schulte-dev.net, robin-schulte-dev.org, robin-schulte-dev.info, robin-schulte-dev.io, robin-schulte-dev.dev, robin-schulte-dev.com, robin-schulte-dev.net, robin-schulte-dev.org, robin-schulte-dev.info, robin-schulte-dev.io, angular, symfony, fullstack, software_engineer, software_developer, web_developer, web_development'
      },
      {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      {name: 'date', content: '2023-06-14', scheme: 'YYYY-MM-DD'},
      {charset: 'UTF-8'},
    ]);
  }
}
