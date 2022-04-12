import { Component, VERSION } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  namee = 'Angular ';
  constructor(public translate: TranslateService) {
    this.translate.use('en');
  }
}
