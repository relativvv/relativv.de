import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './home/profile/profile.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import { ProjectsComponent } from './projects/projects.component';
import { ProjectEntryComponent } from './projects/project-entry/project-entry.component';
import { ProgrammingLanguageComponent } from './projects/project-entry/programming-language/programming-language.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ProjectsComponent,
    ProjectEntryComponent,
    ProgrammingLanguageComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    NgxTypedJsModule,
  ]
})
export class SitesModule { }
