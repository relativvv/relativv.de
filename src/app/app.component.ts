import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'relativv DEV | Portfolio';

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if(this.router.url === '/') {
      //this.router.navigate(['/home']);
    }
  }
}
