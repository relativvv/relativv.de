import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationItemComponent } from './navigation/navigation-item/navigation-item.component';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [  
    NavigationComponent
  ]
})
export class SharedModule { }
