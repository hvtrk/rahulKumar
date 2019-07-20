import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public home: any = false;
  public about: any = false;
  public tech: any = false;
  public service: any = false;
  public blog: any = false;
  public contact: any = false;
  constructor (
    private spinner: NgxSpinnerService,
    ) {
    this.spinner.show();
    this.changeRoute('/');
  }
  changeRoute(pathname) {
    if (pathname) {
      console.log(pathname);
      switch (pathname) {
        case '/about':
          this.about = true;
          this.home = false;
          this.tech = false;
          this.service = false;
          this.blog = false;
          this.contact = false;
          break;
        case '/':
          this.home = true;
          this.about = false;
          this.tech = false;
          this.service = false;
          this.blog = false;
          this.contact = false;
          break;
        case '/technology':
          this.tech = true;
          this.about = false;
          this.home = false;
          this.service = false;
          this.blog = false;
          this.contact = false;
          break;
        case '/service':
          this.service = true;
          this.about = false;
          this.home = false;
          this.tech = false;
          this.blog = false;
          this.contact = false;
          break;
        case '/blog':
          this.blog = true;
          this.about = false;
          this.home = false;
          this.tech = false;
          this.service = false;
          this.contact = false;
          break;
        case '/contact':
          this.contact = true;
          this.about = false;
          this.home = false;
          this.tech = false;
          this.service = false;
          this.blog = false;
          break;
        default:
          break;
      }
    }
  }
  gotoTop() {
    window.scroll(0, 0);
  }
}
