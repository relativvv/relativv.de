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

  text: string = "Hello! I'm Robin, an experienced full stack developer, with expertise in Angular and Symfony frameworks. I have a strong background in building robust and user-friendly web applications.\n" +
    "Currently, I work at a leading software company, contributing to the development of e-commerce solutions.<br /> My skills in <b>Angular and Symfony</b> have been instrumental in helping businesses thrive in the digital landscape.\n" +
    "I have a solid understanding of front-end and back-end development, including <b>HTML, LESS, and TypeScript</b>. I also have experience with databases like <b>MySQL</b> for efficient data handling.\n" +
    "What sets me apart is my problem-solving mindset. I thrive in challenging situations, always seeking innovative solutions. Staying up-to-date with industry trends and technologies is crucial to me.\n" +
    "Beyond programming, I'm an avid learner, constantly exploring diverse subjects to enhance my creativity. Thank you for visiting my portfolio, and I look forward to collaborating on exciting projects." +
    "Feel free to <a href='mailto: r.schulte@relativv.de'>reach out to me</a> for inquiries or opportunities. Let's create something amazing together!"
}
