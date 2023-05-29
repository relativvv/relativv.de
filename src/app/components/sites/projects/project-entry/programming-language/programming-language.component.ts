import {Component, Input} from '@angular/core';
import {ProgrammingLanguage} from "../../../../../models/project.model";

@Component({
  selector: 'app-programming-language',
  templateUrl: './programming-language.component.html',
  styleUrls: ['./programming-language.component.less']
})
export class ProgrammingLanguageComponent {

  @Input() programmingLanguage: ProgrammingLanguage;

}
