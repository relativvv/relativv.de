import { Component } from '@angular/core';
import {Project} from "../../../models/project.model";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {

  projects: Project[];

  constructor() {
    this.projects = [
      {
        displayName: 'Angular Portfolio',
        description: 'This is my portfolio website. It is built using Angular 9 and is hosted on GitHub Pages.',
        programmingLanguages: [
          { displayName: "Angular", colorHex: '#dd0031' },
          { displayName: "Angular", colorHex: '#dd0031' },
        ],
        gitHubLink: 'https://google.com'
      },
      {
        displayName: 'Angular Portfolio',
        description: 'This is my portfolio website. It is built using Angular 9 and is hosted on GitHub Pages.',
        programmingLanguages: [
          { displayName: "Angular", colorHex: '#dd0031' },
          { displayName: "Angular", colorHex: '#dd0031' },
        ],
        gitHubLink: 'asdf'
      },
      {
        displayName: 'Angular Portfolio',
        description: 'This is my portfolio website. It is built using Angular 9 and is hosted on GitHub Pages.',
        programmingLanguages: [
          { displayName: "Angular", colorHex: '#dd0031' },
          { displayName: "Angular", colorHex: '#dd0031' },
        ],
        gitHubLink: 'asdf'
      },
    ]
  }
}
