import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  typedJsSucceed: boolean = false;

  constructor(
    private readonly cookieService: CookieService
  ) {
  }

  ngOnInit(): void {
    if(this.cookieService.check('typedJsSucceed')) {
      this.typedJsSucceed = true;
    }

    this.cookieService.set("typedJsSucceed", "true", 1);
  }
}
