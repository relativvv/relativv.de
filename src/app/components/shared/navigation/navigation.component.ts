import { Component } from '@angular/core';
import { NavigationItem } from 'src/app/models/nav-item.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent {

  public navItems: NavigationItem[];
  public current: string;

  constructor(
    public readonly router: Router
  ) {
    this.navItems = [
      { displayName: 'Home', iconName: 'home', routerLink: '/home' },
      { displayName: 'Projects', iconName: 'code', routerLink: '/projects' },
      { displayName: 'Skills', iconName: 'fitness_center', routerLink: '/skills' },
      { displayName: 'Tech', iconName: 'computer', routerLink: '/tech' },
    ];
  }
}
