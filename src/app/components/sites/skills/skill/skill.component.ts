import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less']
})
export class SkillComponent {

  @Input() name: string;
  @Input() value: number;
  
}
