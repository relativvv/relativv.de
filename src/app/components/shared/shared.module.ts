import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationItemComponent } from './navigation/navigation-item/navigation-item.component';
import { MatIconModule } from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationItemComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        RouterLink,
        MatTooltipModule
    ],
    exports: [
        NavigationComponent,
        FooterComponent
    ]
})
export class SharedModule { }
