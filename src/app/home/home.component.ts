import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public param = '[param for child]';
  private msg: string;
  public homeServiceObjects: any;

  constructor(
    @Inject('mail') private mailService,
    private homeService: HomeService
  ) {
    this.msg = mailService.message;
    this.homeServiceObjects = {
      pbl: homeService.publicStr,
      prv: homeService.privateStr
    };

    setTimeout(() => {
      this.param = '12345';
    }, 2000);
  }
}
