import { Component } from '@angular/core';
import {Skill} from "../../../models/skill.model";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent {

  constructor(
    private readonly title: Title,
    private readonly meta: Meta
  ) {
    this.title.setTitle(window.location.hostname + ' Portfolio | Skills');
    this.meta.updateTag({ name: 'description', content: 'Home component of the portfolio page from Robin Schulte aka relativv, a fullstack software engineer. This is the component to see the Skillset from Robin Schulte' });
  }

  public frameworks: Skill[] = [
    {
      name: "Angular",
      value: 85
    },
    {
      name: "Symfony",
      value: 70
    },
    {
      name: "Materialize",
      value: 76
    },
    {
      name: "Bootstrap",
      value: 60
    },
  ];

  public programmingLanguages: Skill[] = [
    {
      name: "HTML",
      value: 95
    },
    {
      name: "CSS / Less",
      value: 80
    },
    {
      name: "PHP",
      value: 82
    },
    {
      name: "TypeScript / JavaScript",
      value: 82
    },
    {
      name: "Java",
      value: 65
    },
    {
      name: "C#",
      value: 60
    },
    {
      name: "Python",
      value: 63
    },
    {
      name: "SQL",
      value: 82
    },
  ];

  public devOpsList: Skill[] = [
    {
      name: "Docker",
      value: 90
    },
    {
      name: "Kubernetes",
      value: 65
    },
    {
      name: "Nginx",
      value: 76
    },
  ];

  public others: Skill[] = [
    {
      name: "Linux",
      value: 85
    },
    {
      name: "MS-Office",
      value: 90
    },
    {
      name: "Git",
      value: 80
    },
    {
      name: "Jira",
      value: 70
    },
    {
      name: "Confluence",
      value: 70
    },
    {
      name: "Scrum",
      value: 80
    },
    {
      name: "Hardware",
      value: 89
    },
    {
      name: "10 Finger typing",
      value: 98
    },
    {
      name: "English (Writing/Talking)",
      value: 87
    },
  ];

}
