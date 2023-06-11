import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './home/profile/profile.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import { ProjectsComponent } from './projects/projects.component';
import { ProjectEntryComponent } from './projects/project-entry/project-entry.component';
import { ProgrammingLanguageComponent } from './projects/project-entry/programming-language/programming-language.component';
import { SkillsComponent } from './skills/skills.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { SkillComponent } from './skills/skill/skill.component';
import {NgProgressModule} from "ngx-progressbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import { TechComponent } from './tech/tech.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ProjectsComponent,
    ProjectEntryComponent,
    ProgrammingLanguageComponent,
    SkillsComponent,
    SkillComponent,
    TechComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    NgxTypedJsModule,
    MatProgressBarModule,
    NgProgressModule,
    MatTooltipModule,
  ]
})
export class SitesModule { }
