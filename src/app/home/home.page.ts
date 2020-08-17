import { Component } from '@angular/core';

import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private themeableBrowser: ThemeableBrowser) {
    this.openBrowser();
  }

  openBrowser(){
    const options: ThemeableBrowserOptions = {
      toolbar: {
        height: 0,
        color: '#ffffff'
    }
      
 }
    const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://www.tclilibrary.com','_blank', options);
  }

  

}
