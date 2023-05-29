import { Component } from '@angular/core';
import { NavigationItem } from 'src/app/models/nav-item.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent {

  public navItems: NavigationItem[];

  constructor() {
    this.navItems = [
      { displayName: 'Home', iconName: 'home' },
      { displayName: 'Projects', iconName: 'code' },
      { displayName: 'Skills', iconName: 'fitness_center' },
      { displayName: 'Tech', iconName: 'computer' },
    ]
  }
}
