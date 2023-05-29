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

  constructor(
    private readonly router: Router
  ) {
    this.navItems = [
      { displayName: 'Home', iconName: 'home' },
      { displayName: 'Projects', iconName: 'code' },
      { displayName: 'Skills', iconName: 'fitness_center' },
      { displayName: 'Tech', iconName: 'computer' },
    ];

    switch(this.router.url) {
      case '/projects':
        break;

      case '/skills':
        break;

      case '/tech':
        break;

      case '/home':
      default:
        break;
    }
  }
}
