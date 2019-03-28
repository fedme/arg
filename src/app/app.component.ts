import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppService } from './services/common/app.service';
import { ArgService } from './services/arg/arg.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private expService: ArgService,
    private app: AppService
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {

      // init App Service
      this.app.init(this.expService); 

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }
}
