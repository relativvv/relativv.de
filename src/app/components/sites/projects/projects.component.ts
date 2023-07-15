import { Component } from '@angular/core';
import {GitHubRepository, ProgrammingLanguage, Project} from "../../../models/project.model";
import {GithubService} from "../../../services/github.service";
import {forkJoin, switchMap} from "rxjs";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {

  projects: Project[];

  constructor(
    private readonly githubService: GithubService,
    private readonly title: Title,
    private readonly meta: Meta
  ) {
    this.title.setTitle('relativv\'s Portfolio | Projects');
    this.meta.updateTag({ name: 'description', content: 'Home component of the portfolio page from Robin Schulte aka relativv, a fullstack software engineer. This is the component, connected to Github, to see all open source projects where Robin Schulte contributed' });
    this.githubService.getRepositories()
      .pipe(
        switchMap((repositories: GitHubRepository[]) => {
          const requests: any[] = [];
          this.projects = repositories.map((repository: GitHubRepository): Project => {
            return {
              displayName: repository.name,
              description: repository.description,
              programmingLanguages: [],
              gitHubLink: repository.html_url
            }
          });
          
          repositories.forEach((repository: GitHubRepository): void => {
            requests.push(this.githubService.getRepositoryLanguages(repository.name));
          });

          return forkJoin(requests);
        })
      ).subscribe((programmingLanguages: any[]): void => {
        this.projects.forEach((project: Project, index: number): void => {
          const keys: string[] = Object.keys(programmingLanguages[index]);
          keys.forEach((key: string): void => {
            project.programmingLanguages.push({
              displayName: key,
              colorHex: "#121212"
            });
          });

          this.mapColorCodesToFrameworkAndLanguages(project);
          this.mapProgrammingLanguageToFramework(project);
          project.programmingLanguages = project.programmingLanguages.slice(0, 3);
        });
    })
  }

  private mapProgrammingLanguageToFramework(project: Project): void {
    if (project.programmingLanguages.some(lang => lang.displayName === 'PHP')) {
      project.programmingLanguages.unshift({
        displayName: 'Symfony',
        colorHex: '#121212'
      })
    }

    if (project.programmingLanguages.some(lang => lang.displayName === 'TypeScript') &&
      project.programmingLanguages.some(lang => lang.displayName === 'SCSS')) {
      project.programmingLanguages.unshift({
        displayName: 'Angular',
        colorHex: '#c3002f'
      })
    }
  }

  private mapColorCodesToFrameworkAndLanguages(project: Project): void {
    project.programmingLanguages.forEach((programmingLanguage: ProgrammingLanguage): void => {
      switch(programmingLanguage.displayName) {
        case 'TypeScript':
          programmingLanguage.colorHex = '#2b7489';
          break;
        case 'SCSS':
          programmingLanguage.colorHex = '#c6538c';
          break;
        case 'PHP':
          programmingLanguage.colorHex = '#8892bf';
          break;
        case 'JavaScript':
          programmingLanguage.colorHex = '#f1e05a';
          break;
        case 'HTML':
          programmingLanguage.colorHex = '#e34c26';
          break;
        case 'CSS':
          programmingLanguage.colorHex = '#563d7c';
          break;
        case 'C#':
          programmingLanguage.colorHex = '#178600';
          break;
        case 'C':
          programmingLanguage.colorHex = '#555555';
          break;
        case 'Python':
          programmingLanguage.colorHex = '#3572a5';
          break;
        case 'Java':
          programmingLanguage.colorHex = '#b07219';
          break;
        case 'Go':
          programmingLanguage.colorHex = '#00ADD8';
          break;
        case 'Dockerfile':
          programmingLanguage.colorHex = '#384d54';
          break;
      }
    });
  }
}
