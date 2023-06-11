import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/sites/home/home.component';
import {ProjectsComponent} from "./components/sites/projects/projects.component";
import {SkillsComponent} from "./components/sites/skills/skills.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'tech',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
