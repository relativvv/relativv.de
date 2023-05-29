import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './home/profile/profile.component';
import {NgxTypedJsModule} from "ngx-typed-js";

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    NgxTypedJsModule,
  ]
})
export class SitesModule { }
