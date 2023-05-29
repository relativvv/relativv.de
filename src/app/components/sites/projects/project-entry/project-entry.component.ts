import {Component, Input} from '@angular/core';
import {Project} from "../../../../models/project.model";

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.less']
})
export class ProjectEntryComponent {

  @Input() project: Project;

  protected readonly open = open;

  public openLink(link: string): void {
    window.open(link, '_blank');
  }
}
